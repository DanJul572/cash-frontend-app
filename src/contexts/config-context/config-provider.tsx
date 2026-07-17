import type { ReactNode } from 'react';

import type { ConfigResponseType } from '@types';

import { ConfigContext } from './config-context';

type ConfigProviderPropsType = {
    config: ConfigResponseType;
    children: ReactNode;
};

export function ConfigProvider({ config, children }: ConfigProviderPropsType) {
    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}
