import { useQuery } from '@tanstack/react-query';

import { authenticatedConfigRequest, guestConfigRequest } from '@requests';

export const useGuestConfigQuery = () => {
  return useQuery({
    queryKey: ['config', 'guest'],
    queryFn: guestConfigRequest,
  });
};

export const useAuthenticatedConfigQuery = () => {
  return useQuery({
    queryKey: ['config', 'authenticated'],
    queryFn: authenticatedConfigRequest,
  });
};
