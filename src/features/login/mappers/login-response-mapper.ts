import { loginResponseSchema } from '../schemas';

export const loginResponseMapper = loginResponseSchema.transform((res) => ({
  isSuccess: res.status,
  message: res.message,
  accessToken: res.data.accessToken,
  refreshToken: res.data.refreshToken,
}));
