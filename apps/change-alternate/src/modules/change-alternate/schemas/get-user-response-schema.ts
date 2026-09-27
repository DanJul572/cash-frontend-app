import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  photoUrl: z.string().nullable(),
  isCurrentUser: z.boolean(),
});

export const getUserResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
  data: z.array(userSchema),
});
