import type { LinkProps } from '@tanstack/react-router';

import type { LoginModuleConfigType } from './login-module-config-type';

export type LoginPagePropsType = {
  config: LoginModuleConfigType;
  forgotPasswordPath: LinkProps['to'];
  registerPath: LinkProps['to'];
  /** Called after a successful login, e.g. to refresh the session and leave the page. */
  onLoginSuccess: () => void;
};
