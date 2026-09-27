import { z } from 'zod';

export const tokenSearchParamSchema = z.object({
  token: z.string().optional(),
});
