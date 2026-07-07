import { sendOtpFormSchema } from '../schemas';

export const sendOtpRequestMapper = sendOtpFormSchema.transform((data) => ({
    email: data.email,
}));
