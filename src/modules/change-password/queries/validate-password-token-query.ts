import { useQuery } from '@tanstack/react-query';

import { validatePasswordTokenRequest } from '../requests';

export const useValidatePasswordTokenQuery = (token?: string) => {
  return useQuery({
    queryKey: ['change-password', 'validate-token', token],
    queryFn: () => validatePasswordTokenRequest(token!),
    enabled: !!token,
  });
};
