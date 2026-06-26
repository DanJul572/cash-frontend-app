import { changePasswordFormSchema } from '../schemas';

export const changePasswordFormMapper = changePasswordFormSchema.transform((data) => ({
    newPassword: data.newPassword,
    confirmNewPassword: data.confirmNewPassword,
}));
