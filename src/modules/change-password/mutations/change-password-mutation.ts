import { useMutation } from '@tanstack/react-query';

import type { ChangePasswordModuleConfigType } from '@types';

import { changePasswordRequest } from '../requests';
import type { ChangePasswordFormType, ChangePasswordMutationOptionsType } from '../types';

export const useChangePasswordMutation = (
    options: ChangePasswordMutationOptionsType,
    config: ChangePasswordModuleConfigType,
) => {
    return useMutation({
        mutationKey: ['postChangePassword'],
        mutationFn: (data: ChangePasswordFormType) => changePasswordRequest(data, config),
        ...options,
    });
};
