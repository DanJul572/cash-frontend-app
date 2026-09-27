import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Link } from '@tanstack/react-router';

import { useTitleHook } from '@zapplib/core';
import PasswordFieldComponent from '@zapplib/ui/components/PasswordField';

import { LOGIN_TRANSLATION_NAMESPACE_CONSTANT } from '../constants';
import { useLoginPageHook } from '../hooks';
import { loginStyle } from '../styles';
import type { LoginPagePropsType } from '../types';

export default function LoginPage({
  config,
  forgotPasswordPath,
  registerPath,
  onLoginSuccess,
}: LoginPagePropsType) {
  useTitleHook('Login');

  const { t } = useTranslation(LOGIN_TRANSLATION_NAMESPACE_CONSTANT);

  const { form, alert, mutation, onSubmit } = useLoginPageHook({ config, onLoginSuccess });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Box sx={loginStyle.containerStyle}>
        {alert && (
          <Alert severity={alert.type} sx={loginStyle.alertStyle}>
            {alert.message}
          </Alert>
        )}
        <Typography variant="h6" color="primary">
          {t('login')}
        </Typography>
        <Card sx={loginStyle.cardStyle}>
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
              <PasswordFieldComponent
                {...field}
                label={t('password.label')}
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={t(fieldState.error?.message || '', config)}
              />
            )}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            disabled={mutation.isPending}
            loading={mutation.isPending}
          >
            {t('login')}
          </Button>
          <Typography>
            <MuiLink component={Link} to={forgotPasswordPath}>
              {t('forgotPassword')}
            </MuiLink>
          </Typography>
          <Typography>
            {t('dontHaveAccount')}{' '}
            <MuiLink component={Link} to={registerPath}>
              {t('register')}
            </MuiLink>
          </Typography>
        </Card>
      </Box>
    </form>
  );
}
