import axios from 'axios';

import { AuthEndpoint } from '@/endpoints';
import type { User } from '@/types';

export const authMeRequest = async () => {
  return axios.get<User>(AuthEndpoint.me, {
    withCredentials: true,
  });
};
