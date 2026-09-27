import { z } from 'zod';

import type { ValidateOtpModuleConfigType } from '../types';

export const validateOtpFormSchema = (config: ValidateOtpModuleConfigType) =>
  z.object({
    otp: z
      .array(
        z
          .string()
          .length(1, 'otp.validation.required')
          .regex(/^\d$/, 'otp.validation.invalidDigit'),
      )
      .length(config.otpLength, 'otp.validation.invalidLength'),
  });
