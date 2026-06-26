import { forgotPasswordResponseSchema } from '../schemas';

export const forgotPasswordResponseMapper = forgotPasswordResponseSchema.transform((res) => ({
    message: res.message,
}));
