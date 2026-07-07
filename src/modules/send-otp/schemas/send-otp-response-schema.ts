import { z } from 'zod';

export const sendOtpResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
    data: z.object({
        otpLength: z.number(),
    }),
});
