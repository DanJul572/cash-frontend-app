import { z } from 'zod';

import type { GuestConfigResponseType } from '@types';

type ChangePasswordModuleConfig = GuestConfigResponseType['modules']['changePassword'];

export const changePasswordFormSchema = (config: ChangePasswordModuleConfig) =>
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
