import z from 'zod';

export const loginResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  data: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});
