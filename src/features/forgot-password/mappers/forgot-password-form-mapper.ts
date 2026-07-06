import { forgotPasswordFormSchema } from '../schemas';

export const forgotPasswordFormMapper = forgotPasswordFormSchema.transform((data) => ({
    email: data.email,
}));
