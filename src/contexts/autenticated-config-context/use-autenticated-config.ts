import { useContext } from 'react';

import { AuthenticatedConfigContext } from './autenticated-config-context';

export function useAuthenticatedConfig() {
    const context = useContext(AuthenticatedConfigContext);
    if (!context) {
        throw new Error('useAuthenticatedConfig must be used within a AuthenticatedConfigProvider');
    }
    return context;
}
