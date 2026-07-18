import { createContext } from 'react';

import type { GuestConfigResponseType } from '@types';

export const GuestConfigContext = createContext<GuestConfigResponseType | undefined>(undefined);
