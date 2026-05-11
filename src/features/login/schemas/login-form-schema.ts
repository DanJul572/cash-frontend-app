import { z } from 'zod';

import { loginConfig } from '../configs';

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, 'email.validation.required')
    .email('email.validation.invalidFormat'),
  password: z
    .string()
    .min(1, 'password.validation.required')
    .min(loginConfig.minLengthPassword, 'password.validation.minLength'),
});
