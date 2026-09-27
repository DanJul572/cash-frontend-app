import { loginFormSchema } from '../schemas';
import type { LoginModuleConfigType } from '../types';

export const loginRequestMapper = (config: LoginModuleConfigType) => {
  return loginFormSchema(config).transform((data) => ({
    email: data.email,
    password: data.password,
  }));
};
