import { useMutation } from '@tanstack/react-query';

import { postRegisterRequest } from '../requests';
import type { RegisterFormType } from '../types';

export const usePostRegisterMutation = () => {
    return useMutation({
        mutationKey: ['postRegister'],
        mutationFn: (data: RegisterFormType) => postRegisterRequest(data),
    });
};
