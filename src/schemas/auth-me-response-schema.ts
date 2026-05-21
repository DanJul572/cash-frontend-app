import z from 'zod';

export const authMeResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
    data: z.object({
        id: z.string(),
        name: z.string(),
        email: z.string().email(),
    }),
});
