import type { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

import type { LoginFormType } from './login-form-type';

export type PasswordFieldComponent = {
    field: ControllerRenderProps<LoginFormType, 'password'>;
    fieldState: ControllerFieldState;
};
