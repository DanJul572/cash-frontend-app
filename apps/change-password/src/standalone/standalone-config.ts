import type { ChangePasswordModuleConfigType } from '../modules/change-password/types';

// Standalone mode has no host to load the guest config from, so it uses the local dev defaults
export const standaloneChangePasswordConfig: ChangePasswordModuleConfigType = {
  minLengthPassword: 10,
};
