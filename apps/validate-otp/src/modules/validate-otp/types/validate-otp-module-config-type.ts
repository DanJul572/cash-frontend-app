export type ValidateOtpModuleConfigType = {
  otpLength: number;
  resendCooldown: number;
};

declare module '@zapplib/core' {
  interface GuestModulesConfigType {
    validateOtp: ValidateOtpModuleConfigType;
  }
}
