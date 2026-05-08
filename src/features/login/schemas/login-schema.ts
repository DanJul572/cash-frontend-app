import { z } from 'zod';

const schema = z.object({
  email: z
    .string()
    .min(1, 'email.validation.required')
    .email('email.validation.invalidFormat'),
  password: z
    .string()
    .min(1, 'password.validation.required')
    .min(8, 'password.validation.minLength'),
});

export const loginSchema = {
  schema,
};
