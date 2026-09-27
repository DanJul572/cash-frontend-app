import { registerFormSchema } from '../schemas';
import type { RegisterModuleConfigType } from '../types';

export const registerRequestMapper = (config: RegisterModuleConfigType) =>
  registerFormSchema(config).transform((data) => ({
    email: data.email,
    password: data.password,
  }));
