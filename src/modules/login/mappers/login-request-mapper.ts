import type { LoginModuleConfigType } from '@types';

import { loginFormSchema } from '../schemas';

export const loginRequestMapper = (config: LoginModuleConfigType) => {
    return loginFormSchema(config).transform((data) => ({
        email: data.email,
        password: data.password,
    }));
};
