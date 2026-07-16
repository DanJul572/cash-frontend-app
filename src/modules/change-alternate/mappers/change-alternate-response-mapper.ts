import { changeAlternateResponseSchema } from '../schemas';

export const changeAlternateResponseMapper = changeAlternateResponseSchema.transform((res) =>
    res.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        photoUrl: user.photoUrl,
    })),
);
