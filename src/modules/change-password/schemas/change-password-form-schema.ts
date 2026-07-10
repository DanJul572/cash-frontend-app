import { z } from 'zod';

import { changePasswordConfig } from '../configs';

export const changePasswordFormSchema = z
    .object({
        newPassword: z
            .string()
            .min(1, 'form.newPasswordField.validation.required')
            .min(
                changePasswordConfig.minLengthPassword,
                'form.newPasswordField.validation.minLength',
            ),
        confirmNewPassword: z.string().min(1, 'form.confirmNewPasswordField.validation.required'),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: 'form.confirmNewPasswordField.validation.mismatch',
        path: ['confirmNewPassword'],
    });
