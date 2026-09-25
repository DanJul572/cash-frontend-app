import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { type TextFieldProps } from '@mui/material/TextField';

import usePasswordFieldComponentHook from '@hooks/password-field/use-password-field-component-hook';

import IconComponent from '../icon/icon-component';

export default function PasswordFieldComponent(props: TextFieldProps) {
  const { showPassword, setShowPassword } = usePasswordFieldComponentHook();

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                <IconComponent
                  icon={showPassword ? 'ic:baseline-visibility-off' : 'ic:baseline-visibility'}
                />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
