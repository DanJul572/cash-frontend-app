import { z } from 'zod';

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    photoUrl: z.string().nullable(),
});

export const getUserResponseSchema = z.object({
    status: z.number(),
    data: z.array(userSchema),
});
