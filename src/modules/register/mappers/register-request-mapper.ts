import type { GuestConfigResponseType } from '@types';

import { registerFormSchema } from '../schemas';

type RegisterModuleConfigType = GuestConfigResponseType['modules']['register'];

export const registerRequestMapper = (config: RegisterModuleConfigType) =>
  registerFormSchema(config).transform((data) => ({
    email: data.email,
    password: data.password,
  }));
