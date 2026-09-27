import type { LoginModuleConfigType } from '../modules/login/types';

// Standalone mode has no host to load the guest config from, so it uses the local dev defaults
export const standaloneLoginConfig: LoginModuleConfigType = {
  minLengthPassword: 10,
};
