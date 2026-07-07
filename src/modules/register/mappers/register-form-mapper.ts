import { registerFormSchema } from '../schemas';

export const registerFormMapper = registerFormSchema.transform((data) => ({
    email: data.email,
    password: data.password,
}));
