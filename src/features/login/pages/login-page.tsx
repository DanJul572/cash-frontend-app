import { Controller } from 'react-hook-form';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import svg from '@assets/vite.svg';

import { loginConfig } from '../configs';
import { useLogin } from '../hooks';
import { loginStyle } from '../styles';

export default function LoginPage() {
  const { t, form, alert, mutation, onSubmit, showPassword, setShowPassword } =
    useLogin();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Box sx={loginStyle.container}>
        {alert && (
          <Alert severity={alert.type} sx={loginStyle.alert}>
            {alert.message}
          </Alert>
        )}
        <Card sx={loginStyle.card}>
          <img src={svg} style={loginStyle.logo} />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label={t('email.label')}
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={t(fieldState.error?.message || '')}
              />
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
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
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
          <Button
            variant="outlined"
            fullWidth
            type="submit"
            disabled={mutation.isPending}
            loading={mutation.isPending}
          >
            {t('login')}
          </Button>
        </Card>
      </Box>
    </form>
  );
}
