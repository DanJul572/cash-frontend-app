import type { LinkProps } from '@tanstack/react-router';

import type { ValidateOtpModuleConfigType } from './validate-otp-module-config-type';

export type ValidateOtpPagePropsType = {
  config: ValidateOtpModuleConfigType;
  loginPath: LinkProps['to'];
  /** Called after the OTP is accepted. */
  onValidateOtpSuccess: () => void;
};
