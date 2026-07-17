import z from 'zod';

export const guestConfigResponseSchema = z.object({
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

export const authenticatedConfigResponseSchema = z.object({
    status: z.boolean(),
    message: z.string(),
    data: z.object({
        dataPerPage: z.number(),
    }),
});
