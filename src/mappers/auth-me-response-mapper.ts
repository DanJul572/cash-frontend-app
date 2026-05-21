import { authMeResponseSchema } from '@/schemas';

export const authMeResponseMapper = authMeResponseSchema.transform((res) => ({
    isSuccess: res.status,
    message: res.message,
    id: res.data.id,
    name: res.data.name,
    email: res.data.email,
}));
