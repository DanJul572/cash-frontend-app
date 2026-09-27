import { z } from 'zod';

import type { ChangePasswordModuleConfigType } from '../types';

export const changePasswordFormSchema = (config: ChangePasswordModuleConfigType) =>
  z
    .object({
      newPassword: z
        .string()
        .min(1, 'form.newPasswordField.validation.required')
        .min(config.minLengthPassword, 'form.newPasswordField.validation.minLength'),
      confirmNewPassword: z.string().min(1, 'form.confirmNewPasswordField.validation.required'),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: 'form.confirmNewPasswordField.validation.mismatch',
      path: ['confirmNewPassword'],
    });
