import type { LinkProps } from '@tanstack/react-router';

import type { RegisterModuleConfigType } from './register-module-config-type';

export type RegisterPagePropsType = {
  config: RegisterModuleConfigType;
  loginPath: LinkProps['to'];
};
