import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { loginConfig } from '../configs';
import { usePasswordField } from '../hooks';
import type { PasswordFieldComponent } from '../types';

export default function PasswordFieldComponent({ field, fieldState }: PasswordFieldComponent) {
    const { showPassword, setShowPassword, t } = usePasswordField();

    return (
        <TextField
            {...field}
            label={t('password.label')}
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            error={!!fieldState.error}
            helperText={t(fieldState.error?.message || '', loginConfig)}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}
