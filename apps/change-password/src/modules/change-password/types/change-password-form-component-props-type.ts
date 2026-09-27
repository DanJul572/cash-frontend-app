import type { Control } from 'react-hook-form';

import type { ChangePasswordFormType } from './change-password-form-type';
import type { ChangePasswordModuleConfigType } from './change-password-module-config-type';

export type ChangePasswordFormComponentPropsType = {
  config: ChangePasswordModuleConfigType;
  control: Control<ChangePasswordFormType>;
  isPending: boolean;
};
