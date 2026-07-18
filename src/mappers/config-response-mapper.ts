import { authenticatedConfigResponseSchema, guestConfigResponseSchema } from '@schemas';

export const guestConfigResponseMapper = guestConfigResponseSchema.transform((res) => ({
    modules: {
        login: {
            minLengthPassword: res.data.modules.login.minLengthPassword,
        },
    },
}));

export const authenticatedConfigResponseMapper = authenticatedConfigResponseSchema.transform(
    (res) => ({
        dataPerPage: res.data.dataPerPage,
    }),
);
