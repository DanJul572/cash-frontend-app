import { Controller } from 'react-hook-form';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Link } from '@tanstack/react-router';

import { PasswordFieldComponent } from '@components';
import { useTitleHook } from '@hooks';

import { loginConfig } from '../configs';
import { useLoginPageHook } from '../hooks';
import { loginStyle } from '../styles';

export default function LoginPage() {
    useTitleHook('Login');

    const { t, form, alert, mutation, onSubmit } = useLoginPageHook();

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
                                helperText={t(fieldState.error?.message || '', loginConfig)}
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
                        <MuiLink component={Link} to="/forgot-password">
                            {t('forgotPassword')}
                        </MuiLink>
                    </Typography>
                    <Typography>
                        {t('dontHaveAccount')}{' '}
                        <MuiLink component={Link} to="/register">
                            {t('register')}
                        </MuiLink>
                    </Typography>
                </Card>
            </Box>
        </form>
    );
}
