import * as Joi from 'joi';
import { adminUserResource } from '../resources/adminUser.resource';
import { coinResource } from '../resources/coin.resource';
import { AdminBroOptions } from 'admin-bro';

export const adminConfigValidationSchema = {
  SUPER_ADMIN_EMAIL: Joi.string().required(),
  SUPER_ADMIN_PASSWORD: Joi.string().required(),
  ADMIN_COOKIE_NAME: Joi.string().required(),
  ADMIN_SESSION_KEY: Joi.string().required(),
  ADMIN_SESSION_SECRET: Joi.string().required(),
};

export const adminBroOptions: AdminBroOptions = {
  rootPath: '/admin',
  branding: {
    companyName: 'Admin | Change2Collect',
    logo: '/logo.png',
    softwareBrothers: true,
  },
  resources: [adminUserResource, coinResource],
};
