import { Controller } from 'react-hook-form';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Link } from '@tanstack/react-router';

import { useTitleHook } from '@hooks';

import { sendOtpConfig } from '../configs';
import { useSendOtpPageHook } from '../hooks';
import { sendOtpStyle } from '../styles';

export default function SendOtpPage() {
    useTitleHook('Send OTP');

    const { t, form, alert, mutation, onSubmit } = useSendOtpPageHook();

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={sendOtpStyle.container}>
                {alert && (
                    <Alert severity={alert.type} sx={sendOtpStyle.alert}>
                        {alert.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('sendOtp')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {t('subtitle')}
                </Typography>
                <Card sx={sendOtpStyle.card}>
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
                    {mutation.isSuccess && (
                        <Typography variant="caption" color="text.secondary">
                            {t('otpLengthInfo', { otpLength: sendOtpConfig.otpLength })}
                        </Typography>
                    )}
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={mutation.isPending}
                        loading={mutation.isPending}
                    >
                        {t('sendOtp')}
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
