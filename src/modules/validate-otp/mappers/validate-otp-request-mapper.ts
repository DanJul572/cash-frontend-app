import { validateOtpFormSchema } from '../schemas';

export const validateOtpRequestMapper = validateOtpFormSchema.transform(
    (data) => ({
        otp: data.otp.join(''),
    }),
);
