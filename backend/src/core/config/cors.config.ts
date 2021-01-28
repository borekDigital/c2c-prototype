import * as Joi from 'joi';

export const corsConfigValidationSchema = {
  CLIENT_HOST_WEB: Joi.string().required(),
};
