import { useMutation } from '@tanstack/react-query';

import { postRegisterRequest } from '../requests';
import type { PostRegisterMutationOptionsType, RegisterFormType } from '../types';

export const usePostRegisterMutation = (options: PostRegisterMutationOptionsType) => {
    return useMutation({
        mutationKey: ['postRegister'],
        mutationFn: (data: RegisterFormType) => postRegisterRequest(data),
        ...options,
    });
};
