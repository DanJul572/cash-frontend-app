import { queryOptions } from '@tanstack/react-query';

import { authMeRequest } from '@requests';

export const authMeQuery = queryOptions({
    queryKey: ['auth', 'me'],
    queryFn: authMeRequest,
});
