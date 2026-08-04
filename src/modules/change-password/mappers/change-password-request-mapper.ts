import type { ChangePasswordModuleConfigType } from '@types';

import { changePasswordFormSchema } from '../schemas';

export const changePasswordRequestMapper = (config: ChangePasswordModuleConfigType) => {
  return changePasswordFormSchema(config).transform((data) => ({
    newPassword: data.newPassword,
    confirmNewPassword: data.confirmNewPassword,
  }));
};
