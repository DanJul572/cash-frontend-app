import { useQuery } from '@tanstack/react-query';

import { getUserRequest } from '../requests';

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ['auth', 'alternates'],
    queryFn: getUserRequest,
  });
};
