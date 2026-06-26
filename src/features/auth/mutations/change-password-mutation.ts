import { useMutation } from '@tanstack/react-query';

import { postChangePasswordRequest } from '../requests';
import type { ChangePasswordFormType } from '../types';

export const usePostChangePasswordMutation = () => {
    return useMutation({
        mutationKey: ['postChangePassword'],
        mutationFn: (data: ChangePasswordFormType) => postChangePasswordRequest(data),
    });
};
