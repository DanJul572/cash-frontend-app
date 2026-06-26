import { z } from 'zod';

import { changePasswordConfig } from '../configs';

export const changePasswordFormSchema = z
    .object({
        newPassword: z
            .string()
            .min(1, 'newPassword.validation.required')
            .min(changePasswordConfig.minLengthPassword, 'newPassword.validation.minLength'),

        confirmNewPassword: z.string().min(1, 'confirmNewPassword.validation.required'),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: 'confirmNewPassword.validation.mismatch',
        path: ['confirmNewPassword'],
    });
