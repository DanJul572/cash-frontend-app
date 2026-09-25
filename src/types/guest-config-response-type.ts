import type { DateTimeFormatConfigType } from './datetime-field';

export type LoginModuleConfigType = {
  minLengthPassword: number;
};

export type RegisterModuleConfigType = {
  minLengthPassword: number;
  minLengthName: number;
};

export type ValidateOtpModuleConfigType = {
  otpLength: number;
  resendCooldown: number;
};

export type ChangePasswordModuleConfigType = {
  minLengthPassword: number;
};

export type GuestConfigResponseType = {
  dateTimeFormat: DateTimeFormatConfigType;
  modules: {
    login: LoginModuleConfigType;
    register: RegisterModuleConfigType;
    validateOtp: ValidateOtpModuleConfigType;
    changePassword: ChangePasswordModuleConfigType;
  };
};
