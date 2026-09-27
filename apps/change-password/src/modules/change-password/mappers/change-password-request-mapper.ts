import { changePasswordFormSchema } from '../schemas';
import type { ChangePasswordModuleConfigType } from '../types';

export const changePasswordRequestMapper = (config: ChangePasswordModuleConfigType) => {
  return changePasswordFormSchema(config).transform((data) => ({
    newPassword: data.newPassword,
    confirmNewPassword: data.confirmNewPassword,
  }));
};
