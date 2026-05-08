import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'email.validation.required')
    .email('email.validation.invalid_format'),
  password: z
    .string()
    .min(1, 'password.validation.required')
    .min(8, 'password.validation.min_length'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
