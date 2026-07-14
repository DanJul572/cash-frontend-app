import { useMutation } from '@tanstack/react-query';

import { postResendOtpRequest } from '../requests';
import type { PostResendOtpMutationOptionsType } from '../types';

export const usePostResendOtpMutation = (options: PostResendOtpMutationOptionsType) => {
    return useMutation({
        mutationKey: ['postResendOtp'],
        mutationFn: () => postResendOtpRequest(),
        ...options,
    });
};
