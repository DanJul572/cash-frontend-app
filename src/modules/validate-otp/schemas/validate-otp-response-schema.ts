import { z } from 'zod';

export const validateOtpResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
    data: z.object({
        valid: z.boolean(),
    }),
});
