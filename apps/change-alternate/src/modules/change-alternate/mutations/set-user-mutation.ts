import { useMutation } from '@tanstack/react-query';

import { setUserRequest } from '../requests';
import type { SetUserMutationOptionsType } from '../types';

export const useSetUserMutation = (options: SetUserMutationOptionsType) => {
  return useMutation({
    mutationKey: ['change-alternate', 'set-user'],
    mutationFn: (userId: string) => setUserRequest(userId),
    ...options,
  });
};
