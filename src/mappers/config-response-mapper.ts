import { configResponseSchema } from '@schemas';

export const configResponseMapper = configResponseSchema.transform((res) => ({
    modules: {
        login: {
            minLengthPassword: res.data.modules.login.minLengthPassword,
        },
    },
}));
