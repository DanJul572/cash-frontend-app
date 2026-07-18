import { z } from 'zod';

import type { GuestConfigResponseType } from '@types';

type ValidateOtpModuleConfig = GuestConfigResponseType['modules']['validateOtp'];

export const validateOtpFormSchema = (config: ValidateOtpModuleConfig) =>
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
