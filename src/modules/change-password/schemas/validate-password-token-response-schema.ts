import { z } from 'zod';

export const validatePasswordTokenResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
    data: z.object({
        tokenIsValid: z.boolean(),
    }),
});
