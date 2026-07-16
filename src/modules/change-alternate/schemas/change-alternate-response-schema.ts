import { z } from 'zod';

const changeAlternateUserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    photoUrl: z.string().nullable(),
});

export const changeAlternateResponseSchema = z.object({
    status: z.number(),
    data: z.array(changeAlternateUserSchema),
});
