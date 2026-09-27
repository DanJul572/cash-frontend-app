import { useQuery } from '@tanstack/react-query';

import { getUserRequest } from '../requests';

export const useGetUserQuery = (enabled = true) => {
  return useQuery({
    queryKey: ['change-alternate', 'get-user'],
    queryFn: getUserRequest,
    enabled,
  });
};
