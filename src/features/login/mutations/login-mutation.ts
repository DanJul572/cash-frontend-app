import { useMutation } from '@tanstack/react-query';

import { postLoginRequest } from '../requests';
import type { LoginFormType, PostLoginMutationOptionsType } from '../types';

export const usePostLoginMutation = (options: PostLoginMutationOptionsType) => {
  return useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (data: LoginFormType) => postLoginRequest(data),
    ...options,
  });
};
