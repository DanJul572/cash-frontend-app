import z from 'zod';

export const forgotPasswordResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
});
