import { forgotPasswordFormSchema } from '../schemas';

export const forgotPasswordRequestMapper = forgotPasswordFormSchema.transform(
    (data) => ({
        email: data.email,
    }),
);
