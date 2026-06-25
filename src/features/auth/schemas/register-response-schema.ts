import z from 'zod';

export const registerResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
});
