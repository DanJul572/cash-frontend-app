import { changePasswordResponseSchema } from '../schemas';

export const changePasswordResponseMapper = changePasswordResponseSchema.transform((res) => ({
    message: res.message,
}));
