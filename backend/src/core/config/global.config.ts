import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import * as Joi from 'joi';
import { ormConfigValidationSchema } from './orm.config';
import { corsConfigValidationSchema } from './cors.config';
import { adminConfigValidationSchema } from '../../admin/config/admin.config';

const validationSchema = Joi.object({
  // base app config
  APP_PORT: Joi.number().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),

  // database config
  ...ormConfigValidationSchema,

  // admin config
  ...adminConfigValidationSchema,

  // cors config
  ...corsConfigValidationSchema,
});

export const globalConfig: ConfigModuleOptions = {
  isGlobal: true,

  // if a variable is found in multiple .env files, the first one takes precedence
  envFilePath: ['.env.local', '.env'],

  // config validations
  validationSchema,
};
