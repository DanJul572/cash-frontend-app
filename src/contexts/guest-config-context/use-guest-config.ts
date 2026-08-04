import { useContext } from 'react';

import { GuestConfigContext } from './guest-config-context';

export function useGuestConfig() {
  const context = useContext(GuestConfigContext);
  if (!context) {
    throw new Error('useGuestConfig must be used within a GuestConfigProvider');
  }
  return context;
}
