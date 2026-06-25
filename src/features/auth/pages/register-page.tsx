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
import { registerConfig } from '../configs';
import { useRegister } from '../hooks';
import { registerStyle } from '../styles';

export default function RegisterPage() {
    useTitle('Register');

    const { t, form, alert, mutation, onSubmit } = useRegister();

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={registerStyle.container}>
                {alert && (
                    <Alert severity={alert.type} sx={registerStyle.alert}>
                        {alert.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('label')}
                </Typography>
                <Card sx={registerStyle.card}>
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label={t('name.label')}
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={t(fieldState.error?.message || '')}
                            />
                        )}
                    />
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
                                helperText={t(fieldState.error?.message || '', registerConfig)}
                            />
                        )}
                    />
                    <Controller
                        name="confirmPassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <PasswordFieldComponent
                                {...field}
                                label={t('confirmPassword.label')}
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={t(fieldState.error?.message || '', registerConfig)}
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
                        {t('register')}
                    </Button>
                    <Typography>
                        {t('haveAccount')}{' '}
                        <MuiLink component={Link} to="/login">
                            {t('login')}
                        </MuiLink>
                    </Typography>
                </Card>
            </Box>
        </form>
    );
}
