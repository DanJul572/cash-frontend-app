import { validateOtpFormSchema } from '../schemas';
import type { ValidateOtpModuleConfigType } from '../types';

export const validateOtpRequestMapper = (config: ValidateOtpModuleConfigType) =>
  validateOtpFormSchema(config).transform((data) => ({
    otp: data.otp.join(''),
  }));
