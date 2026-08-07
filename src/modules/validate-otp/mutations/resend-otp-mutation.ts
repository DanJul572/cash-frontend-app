import { useMutation } from '@tanstack/react-query';

import { resendOtpRequest } from '../requests';
import type { ResendOtpMutationOptionsType } from '../types';

export const useResendOtpMutation = (options: ResendOtpMutationOptionsType) => {
  return useMutation({
    mutationKey: ['validate-otp', 'resend-otp'],
    mutationFn: () => resendOtpRequest(),
    ...options,
  });
};
