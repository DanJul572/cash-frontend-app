import { sendOtpResponseSchema } from '../schemas';

export const sendOtpResponseMapper = sendOtpResponseSchema.transform((res) => ({
    otpLength: res.data.otpLength,
}));
