import type { ValidateOtpModuleConfigType } from '../modules/validate-otp/types';

// Standalone mode has no host to load the guest config from, so it uses the local dev defaults
export const standaloneValidateOtpConfig: ValidateOtpModuleConfigType = {
  otpLength: 6,
  resendCooldown: 30,
};
