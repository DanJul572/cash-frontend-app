import { loginSchema } from '../schemas';

export const loginMapper = loginSchema.transform((data) => ({
  email: data.email,
  password: data.password,
}));
