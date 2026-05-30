import { authMeResponseSchema } from '@schemas';

export const authMeResponseMapper = authMeResponseSchema.transform((res) => ({
    id: res.data.id,
    name: res.data.name,
    email: res.data.email,
}));
