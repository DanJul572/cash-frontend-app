import { z } from 'zod';

import { validateOtpConfig } from '../configs';

export const validateOtpFormSchema = z.object({
    otp: z
        .array(
            z
                .string()
                .length(1, 'otp.validation.required')
                .regex(/^\d$/, 'otp.validation.invalidDigit'),
        )
        .length(validateOtpConfig.otpLength, 'otp.validation.invalidLength'),
});
