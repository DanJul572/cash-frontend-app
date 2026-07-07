import { registerResponseSchema } from '../schemas';

export const registerResponseMapper = registerResponseSchema.transform((res) => ({
    message: res.message,
}));
