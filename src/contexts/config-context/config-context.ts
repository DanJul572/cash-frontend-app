import { createContext } from 'react';

import type { ConfigResponseType } from '@types';

export const ConfigContext = createContext<ConfigResponseType | undefined>(undefined);
