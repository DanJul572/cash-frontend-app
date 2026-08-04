import { z } from 'zod';

import type { GuestConfigResponseType } from '@types';

type RegisterModuleConfig = GuestConfigResponseType['modules']['register'];

export const registerFormSchema = (config: RegisterModuleConfig) =>
  z
    .object({
      name: z
        .string()
        .min(1, 'name.validation.required')
        .min(config.minLengthName, 'name.validation.minLength'),

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

      confirmPassword: z.string().min(1, 'confirmPassword.validation.required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'confirmPassword.validation.mismatch',
      path: ['confirmPassword'],
    });
