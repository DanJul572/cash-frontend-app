import { loginFormSchema } from '../schemas';

export const loginMapper = loginFormSchema.transform((data) => ({
  email: data.email,
  password: data.password,
}));
