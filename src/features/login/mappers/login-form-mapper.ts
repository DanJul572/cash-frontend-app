import { loginFormSchema } from '../schemas';

export const loginFormMapper = loginFormSchema.transform((data) => ({
  email: data.email,
  password: data.password,
}));
