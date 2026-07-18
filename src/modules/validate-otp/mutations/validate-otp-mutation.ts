import { useMutation } from '@tanstack/react-query';

import type { ValidateOtpModuleConfigType } from '@types';

import { postValidateOtpRequest } from '../requests';
import type { PostValidateOtpMutationOptionsType, ValidateOtpFormType } from '../types';

export const usePostValidateOtpMutation = (
    config: ValidateOtpModuleConfigType,
    options: PostValidateOtpMutationOptionsType,
) => {
    return useMutation({
        mutationKey: ['postValidateOtp'],
        mutationFn: (data: ValidateOtpFormType) => postValidateOtpRequest(data, config),
        ...options,
    });
};
