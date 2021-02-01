import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AdminBro from 'admin-bro';
import { Database, Resource } from '@admin-bro/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { globalConfig } from './core/config/global.config';
import { DatabaseModule } from './core/database/database.module';
import { CustomAdminModule } from './admin/admin.module';
import { CoinsModule } from './features/coins/coins.module';

AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    // core
    ConfigModule.forRoot(globalConfig),
    DatabaseModule,

    // admin
    CustomAdminModule,

    // static content
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*', '/admin*'],
    }),

    // features
    CoinsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
