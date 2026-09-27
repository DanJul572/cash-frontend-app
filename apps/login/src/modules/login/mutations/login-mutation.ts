import { useMutation } from '@tanstack/react-query';

import { loginRequest } from '../requests';
import type { LoginFormType, LoginModuleConfigType, LoginMutationOptionsType } from '../types';

export const useLoginMutation = (
  config: LoginModuleConfigType,
  options: LoginMutationOptionsType,
) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (data: LoginFormType) => loginRequest(data, config),
    ...options,
  });
};
