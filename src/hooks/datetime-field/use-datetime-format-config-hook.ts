import { useContext } from 'react';

import { AuthenticatedConfigContext, GuestConfigContext } from '@contexts';

/** Reads `dateTimeFormat` from the authenticated config, or the guest config on guest pages. */
export default function useDateTimeFormatConfigHook() {
  const authenticatedConfig = useContext(AuthenticatedConfigContext);
  const guestConfig = useContext(GuestConfigContext);

  const dateTimeFormat = authenticatedConfig?.dateTimeFormat ?? guestConfig?.dateTimeFormat;
  if (!dateTimeFormat) {
    throw new Error(
      'useDateTimeFormatConfigHook must be used within a AuthenticatedConfigProvider or GuestConfigProvider',
    );
  }
  return dateTimeFormat;
}
