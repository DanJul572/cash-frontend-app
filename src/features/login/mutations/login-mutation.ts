import { useMutation } from '@tanstack/react-query';

import { postLoginRequest } from '../requests';
import type {
  LoginFormValuesType,
  PostLoginMutationOptionsType,
} from '../types';

export const usePostLoginMutation = (options: PostLoginMutationOptionsType) => {
  return useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (data: LoginFormValuesType) => postLoginRequest(data),
    ...options,
  });
};
