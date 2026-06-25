import { Controller } from 'react-hook-form';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useTitle } from '@hooks';
import { Link } from '@tanstack/react-router';

import { PasswordFieldComponent } from '../components';
import { loginConfig } from '../configs';
import { useLogin } from '../hooks';
import { loginStyle } from '../styles';

export default function LoginPage() {
    useTitle('Login');

    const { t, form, alert, mutation, onSubmit } = useLogin();

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={loginStyle.container}>
                {alert && (
                    <Alert severity={alert.type} sx={loginStyle.alert}>
                        {alert.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('label')}
                </Typography>
                <Card sx={loginStyle.card}>
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
