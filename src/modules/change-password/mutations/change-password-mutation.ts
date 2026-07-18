import { useMutation } from '@tanstack/react-query';

import type { ChangePasswordModuleConfigType } from '@types';

import { postChangePasswordRequest } from '../requests';
import type { ChangePasswordFormType, PostChangePasswordMutationOptionsType } from '../types';

export const usePostChangePasswordMutation = (
    options: PostChangePasswordMutationOptionsType,
    config: ChangePasswordModuleConfigType,
) => {
    return useMutation({
        mutationKey: ['postChangePassword'],
        mutationFn: (data: ChangePasswordFormType) => postChangePasswordRequest(data, config),
        ...options,
    });
};
