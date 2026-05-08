import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useLogin } from '../hooks';
import { loginStyle } from '../styles';

export default function LoginPage() {
  const { t } = useTranslation('login');
  const { form, onSubmit } = useLogin();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Box sx={loginStyle.container}>
        <Card sx={loginStyle.card}>
          <Typography variant="h5" component="h2" gutterBottom>
            Login
          </Typography>
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
                type="password"
                fullWidth
                error={!!fieldState.error}
                helperText={t(fieldState.error?.message || '')}
              />
            )}
          />
          <Button variant="outlined" fullWidth type="submit">
            {t('login')}
          </Button>
        </Card>
      </Box>
    </form>
  );
}
