import type { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

export type PasswordFieldComponent = {
    field: ControllerRenderProps<
        {
            email: string;
            password: string;
        },
        'password'
    >;
    fieldState: ControllerFieldState;
};
