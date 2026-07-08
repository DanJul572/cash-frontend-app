import { useMutation } from '@tanstack/react-query';

import { postValidateOtpRequest } from '../requests';
import type {
    PostValidateOtpMutationOptionsType,
    ValidateOtpFormType,
} from '../types';

export const usePostValidateOtpMutation = (
    options: PostValidateOtpMutationOptionsType,
) => {
    return useMutation({
        mutationKey: ['postValidateOtp'],
        mutationFn: (data: ValidateOtpFormType) => postValidateOtpRequest(data),
        ...options,
    });
};
