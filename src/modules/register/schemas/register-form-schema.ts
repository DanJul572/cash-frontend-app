import { z } from 'zod';

import { registerConfig } from '../configs';

export const registerFormSchema = z
    .object({
        name: z
            .string()
            .min(1, 'name.validation.required')
            .min(registerConfig.minLengthName, 'name.validation.minLength'),

        email: z
            .string()
            .min(1, 'email.validation.required')
            .refine((value) => z.email().safeParse(value).success, {
                message: 'email.validation.invalidFormat',
            }),

        password: z
            .string()
            .min(1, 'password.validation.required')
            .min(registerConfig.minLengthPassword, 'password.validation.minLength'),

        confirmPassword: z.string().min(1, 'confirmPassword.validation.required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'confirmPassword.validation.mismatch',
        path: ['confirmPassword'],
    });
