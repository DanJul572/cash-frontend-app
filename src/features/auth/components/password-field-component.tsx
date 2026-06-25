import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { type TextFieldProps } from '@mui/material/TextField';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { usePasswordField } from '../hooks';

export default function PasswordFieldComponent(props: TextFieldProps) {
    const { showPassword, setShowPassword } = usePasswordField();

    return (
        <TextField
            {...props}
            type={showPassword ? 'text' : 'password'}
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
