import { useMutation } from '@tanstack/react-query';

import type { LoginModuleConfigType } from '@types';

import { postLoginRequest } from '../requests';
import type { LoginFormType, PostLoginMutationOptionsType } from '../types';

export const usePostLoginMutation = (
  config: LoginModuleConfigType,
  options: PostLoginMutationOptionsType,
) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (data: LoginFormType) => postLoginRequest(data, config),
    ...options,
  });
};
