import { z } from 'zod';

export const searchParamSchema = z.object({
    token: z.string().optional(),
});
