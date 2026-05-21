import { loginResponseSchema } from '../schemas';

export const loginResponseMapper = loginResponseSchema.transform((res) => ({
    accessToken: res.data.accessToken,
    refreshToken: res.data.refreshToken,
}));
