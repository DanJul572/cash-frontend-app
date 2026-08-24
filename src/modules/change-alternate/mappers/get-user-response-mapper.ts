import { getUserResponseSchema } from '../schemas';

export const getUserResponseMapper = getUserResponseSchema.transform((res) =>
  res.data.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    photoUrl: user.photoUrl,
    isCurrentUser: user.isCurrentUser,
  })),
);
