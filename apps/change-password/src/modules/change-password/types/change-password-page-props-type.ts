import type { ChangePasswordModuleConfigType } from './change-password-module-config-type';

export type ChangePasswordPagePropsType = {
  config: ChangePasswordModuleConfigType;
  /** Reset token from the link sent by email. */
  token?: string;
};
