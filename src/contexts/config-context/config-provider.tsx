import type { ReactNode } from 'react';

import type { AuthenticatedConfigResponseType, GuestConfigResponseType } from '@types';

import { ConfigContext } from './config-context';

type ConfigProviderPropsType = {
    config: GuestConfigResponseType | AuthenticatedConfigResponseType;
    children: ReactNode;
};

export function ConfigProvider({ config, children }: ConfigProviderPropsType) {
    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}
