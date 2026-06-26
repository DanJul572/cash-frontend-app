import { useMutation } from '@tanstack/react-query';

import { postForgotPasswordRequest } from '../requests';
import type { ForgotPasswordFormType } from '../types';

export const usePostForgotPasswordMutation = () => {
    return useMutation({
        mutationKey: ['postForgotPassword'],
        mutationFn: (data: ForgotPasswordFormType) => postForgotPasswordRequest(data),
    });
};
