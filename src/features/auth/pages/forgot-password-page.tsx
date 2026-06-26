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

import { useForgotPassword } from '../hooks';
import { forgotPasswordStyle } from '../styles';

export default function ForgotPasswordPage() {
    useTitle('Forgot Password');

    const { t, form, alert, mutation, onSubmit } = useForgotPassword();

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={forgotPasswordStyle.container}>
                {alert && (
                    <Alert severity={alert.type} sx={forgotPasswordStyle.alert}>
                        {alert.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('forgotPassword')}
                </Typography>
                <Card sx={forgotPasswordStyle.card}>
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
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={mutation.isPending}
                        loading={mutation.isPending}
                    >
                        {t('submit')}
                    </Button>
                    <Typography>
                        <MuiLink component={Link} to="/login">
                            {t('backToLogin')}
                        </MuiLink>
                    </Typography>
                </Card>
            </Box>
        </form>
    );
}
