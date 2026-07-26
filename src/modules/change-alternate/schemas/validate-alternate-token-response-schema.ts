import { z } from 'zod';

export const validateAlternateTokenResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
    data: z.object({
        tokenIsValid: z.boolean(),
    }),
});
