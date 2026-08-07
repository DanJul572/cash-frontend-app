import { useQuery } from '@tanstack/react-query';

import { treeMenuRequest } from '@requests';

export const useTreeMenuQuery = () => {
  return useQuery({
    queryKey: ['tree-menu'],
    queryFn: treeMenuRequest,
  });
};
