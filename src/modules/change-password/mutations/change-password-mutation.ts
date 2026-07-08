import { useMutation } from '@tanstack/react-query';

import { postChangePasswordRequest } from '../requests';
import type {
    ChangePasswordFormType,
    PostChangePasswordMutationOptionsType,
} from '../types';

export const usePostChangePasswordMutation = (
    options: PostChangePasswordMutationOptionsType,
) => {
    return useMutation({
        mutationKey: ['postChangePassword'],
        mutationFn: (data: ChangePasswordFormType) =>
            postChangePasswordRequest(data),
        ...options,
    });
};
