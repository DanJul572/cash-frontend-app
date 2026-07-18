import type { ReactNode } from 'react';

import type { GuestConfigResponseType } from '@types';

import { GuestConfigContext } from './guest-config-context';

type GuestConfigProviderPropsType = {
    config: GuestConfigResponseType;
    children: ReactNode;
};

export function GuestConfigProvider({ config, children }: GuestConfigProviderPropsType) {
    return <GuestConfigContext.Provider value={config}>{children}</GuestConfigContext.Provider>;
}
