import { z } from 'zod';

import { loginConfig } from '../configs';

export const loginFormSchema = z.object({
    email: z
        .string()
        .min(1, 'email.validation.required')
        .refine((value) => z.email().safeParse(value).success, {
            message: 'email.validation.invalidFormat',
        }),

    password: z
        .string()
        .min(1, 'password.validation.required')
        .min(loginConfig.minLengthPassword, 'password.validation.minLength'),
});
