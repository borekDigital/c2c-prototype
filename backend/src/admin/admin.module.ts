import { Module } from '@nestjs/common';
import { CurrentAdmin } from 'admin-bro';
import { AdminModule } from '@admin-bro/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { AdminUser } from './entities/adminUser.entity';
import { adminBroOptions } from './config/admin.config';
import { AdminUserAvailable } from './resources/adminUser.resource';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminUser]),
    AdminModule.createAdminAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        adminBroOptions,
        sessionOptions: {
          secret: configService.get('ADMIN_SESSION_SECRET'),
          resave: true,
          saveUninitialized: true,
          unset: 'destroy',
        },
        auth: {
          authenticate: async (email, password) => {
            const user = ((await AdminUser.findOne({
              email,
            })) as unknown) as CurrentAdmin;
            if (user) {
              const matched = await bcrypt.compare(
                password,
                user.encryptedPassword,
              );
              if (matched) {
                return user;
              }
            } else if (
              email === configService.get('SUPER_ADMIN_EMAIL') &&
              password === configService.get('SUPER_ADMIN_PASSWORD')
            ) {
              return { email, title: AdminUserAvailable.Admin } as CurrentAdmin;
            }
          },
          cookieName: configService.get('ADMIN_COOKIE_NAME'),
          cookiePassword: configService.get('ADMIN_SESSION_KEY'),
        },
      }),
    }),
  ],
})
export class CustomAdminModule {}
