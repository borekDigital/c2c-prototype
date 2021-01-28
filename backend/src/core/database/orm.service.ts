import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as fs from 'fs';

@Injectable()
export class OrmService implements OnModuleInit {
  configFile = 'ormconfig.json';
  ormConfig: TypeOrmModuleOptions = {};

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.ormConfig = {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST'),
      port: this.configService.get('POSTGRES_PORT'),
      username: this.configService.get('POSTGRES_USER'),
      password: this.configService.get('POSTGRES_PASSWORD'),
      database: this.configService.get('POSTGRES_DB'),
      entities: ['./**/*.entity.ts'],
      migrations: ['dist/migration/*.js'],
      cli: {
        migrationsDir: 'src/migration',
      },
    };

    // create runtime orm config file
    fs.rm(this.configFile, () => {
      fs.writeFile(
        this.configFile,
        JSON.stringify(this.ormConfig, null, 2),
        () => {
          if (process.env.NODE_ENV === 'development') {
            console.log(`${this.configFile} created`);
          }
        },
      );
    });
  }
}
