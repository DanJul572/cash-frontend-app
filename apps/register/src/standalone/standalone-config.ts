import type { RegisterModuleConfigType } from '../modules/register/types';

// Standalone mode has no host to load the guest config from, so it uses the local dev defaults
export const standaloneRegisterConfig: RegisterModuleConfigType = {
  minLengthPassword: 10,
  minLengthName: 3,
};
