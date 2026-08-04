import { z } from 'zod';

import type { GuestConfigResponseType } from '@types';

type LoginModuleConfig = GuestConfigResponseType['modules']['login'];

export const loginFormSchema = (config: LoginModuleConfig) =>
  z.object({
    email: z
      .string()
      .min(1, 'email.validation.required')
      .refine((value) => z.email().safeParse(value).success, {
        message: 'email.validation.invalidFormat',
      }),

    password: z
      .string()
      .min(1, 'password.validation.required')
      .min(config.minLengthPassword, 'password.validation.minLength'),
  });
