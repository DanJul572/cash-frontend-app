import { useRef } from 'react';

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

import { validateOtpConfig } from '../configs';
import { useValidateOtpPageHook } from '../hooks';
import { validateOtpStyle } from '../styles';

export default function ValidateOtpPage() {
    useTitleHook('Validate OTP');

    const { t, form, alert, mutation, onSubmit } = useValidateOtpPageHook();
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string, onChange: (v: string) => void) => {
        const digit = value.replace(/\D/g, '').slice(-1);
        onChange(digit);
        if (digit && index < validateOtpConfig.otpLength - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Backspace' && !form.getValues(`otp.${index}`) && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={validateOtpStyle.container}>
                {alert && (
                    <Alert severity={alert.type} sx={validateOtpStyle.alert}>
                        {alert.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('validateOtp')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {t('subtitle')}
                </Typography>
                <Card sx={validateOtpStyle.card}>
                    <Box sx={validateOtpStyle.boxesRow}>
                        {Array.from({ length: validateOtpConfig.otpLength }).map((_, index) => (
                            <Controller
                                key={index}
                                name={`otp.${index}`}
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <TextField
                                        {...field}
                                        inputRef={(el: HTMLInputElement | null) => {
                                            inputRefs.current[index] = el;
                                        }}
                                        value={field.value || ''}
                                        onChange={(e) =>
                                            handleChange(index, e.target.value, field.onChange)
                                        }
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        variant="outlined"
                                        error={!!fieldState.error}
                                        slotProps={{
                                            htmlInput: {
                                                maxLength: 1,
                                            },
                                        }}
                                        sx={validateOtpStyle.otpBox}
                                    />
                                )}
                            />
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={mutation.isPending}
                        loading={mutation.isPending}
                    >
                        {t('validateOtp')}
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
