import type { ReactNode } from 'react';

import type { AuthenticatedConfigResponseType } from '@types';

import { AuthenticatedConfigContext } from './autenticated-config-context';

type AuthenticatedConfigProviderPropsType = {
    config: AuthenticatedConfigResponseType;
    children: ReactNode;
};

export function AuthenticatedConfigProvider({
    config,
    children,
}: AuthenticatedConfigProviderPropsType) {
    return (
        <AuthenticatedConfigContext.Provider value={config}>
            {children}
        </AuthenticatedConfigContext.Provider>
    );
}
