import { useMutation } from '@tanstack/react-query';

import { postForgotPasswordRequest } from '../requests';
import type { ForgotPasswordFormType, PostForgotPasswordMutationOptionsType } from '../types';

export const usePostForgotPasswordMutation = (options: PostForgotPasswordMutationOptionsType) => {
  return useMutation({
    mutationKey: ['forgot-password', 'post-forgot-password'],
    mutationFn: (data: ForgotPasswordFormType) => postForgotPasswordRequest(data),
    ...options,
  });
};
