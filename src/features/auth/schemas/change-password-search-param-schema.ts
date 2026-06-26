import { z } from 'zod';

export const changePasswordSearchParamSchema = z.object({
    token: z.string().optional(),
});
