import z from 'zod';

export const changePasswordResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
});
