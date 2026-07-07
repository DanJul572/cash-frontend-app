import { loginFormSchema } from '../schemas';

export const loginRequestMapper = loginFormSchema.transform((data) => ({
    email: data.email,
    password: data.password,
}));
