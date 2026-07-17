import z from 'zod';

export const configResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
    data: z.object({
        modules: z.object({
            login: z.object({
                minLengthPassword: z.number(),
            }),
        }),
    }),
});
