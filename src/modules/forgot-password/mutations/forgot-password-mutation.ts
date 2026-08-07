import { useMutation } from '@tanstack/react-query';

import { forgotPasswordRequest } from '../requests';
import type { ForgotPasswordFormType, ForgotPasswordMutationOptionsType } from '../types';

export const useForgotPasswordMutation = (options: ForgotPasswordMutationOptionsType) => {
  return useMutation({
    mutationKey: ['forgot-password'],
    mutationFn: (data: ForgotPasswordFormType) => forgotPasswordRequest(data),
    ...options,
  });
};
