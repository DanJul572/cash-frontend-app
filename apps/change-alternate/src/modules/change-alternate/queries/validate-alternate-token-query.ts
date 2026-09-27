import { useQuery } from '@tanstack/react-query';

import { validateAlternateTokenRequest } from '../requests';

export const useValidateAlternateTokenQuery = (token?: string) => {
  return useQuery({
    queryKey: ['change-alternate', 'validate-token', token],
    queryFn: () => validateAlternateTokenRequest(token!),
    enabled: !!token,
    retry: false,
  });
};
