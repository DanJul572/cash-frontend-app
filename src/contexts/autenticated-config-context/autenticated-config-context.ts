import { createContext } from 'react';

import type { AuthenticatedConfigResponseType } from '@types';

export const AuthenticatedConfigContext = createContext<
  AuthenticatedConfigResponseType | undefined
>(undefined);
