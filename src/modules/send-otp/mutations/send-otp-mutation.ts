import { useMutation } from '@tanstack/react-query';

import { postSendOtpRequest } from '../requests';
import type { PostSendOtpMutationOptionsType, SendOtpFormType } from '../types';

export const usePostSendOtpMutation = (options: PostSendOtpMutationOptionsType) => {
    return useMutation({
        mutationKey: ['postSendOtp'],
        mutationFn: (data: SendOtpFormType) => postSendOtpRequest(data),
        ...options,
    });
};
