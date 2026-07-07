import { changePasswordFormSchema } from '../schemas';

export const changePasswordRequestMapper = changePasswordFormSchema.transform((data) => ({
    newPassword: data.newPassword,
    confirmNewPassword: data.confirmNewPassword,
}));
