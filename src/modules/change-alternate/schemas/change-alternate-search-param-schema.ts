import { z } from 'zod';

export const changeAlternateSearchParamSchema = z.object({
    token: z.string().optional(),
});
