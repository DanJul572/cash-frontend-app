import { createContext } from 'react';

import type { AuthenticatedConfigResponseType, GuestConfigResponseType } from '@types';

export const ConfigContext = createContext<
    GuestConfigResponseType | AuthenticatedConfigResponseType | undefined
>(undefined);
