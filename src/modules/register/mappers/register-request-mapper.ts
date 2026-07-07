import { registerFormSchema } from '../schemas';

export const registerRequestMapper = registerFormSchema.transform((data) => ({
    email: data.email,
    password: data.password,
}));
