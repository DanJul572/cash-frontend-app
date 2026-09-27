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

import { CountdownResendComponent } from '../components';
import { VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT } from '../constants';
import { useValidateOtpPageHook } from '../hooks';
import { validateOtpPageStyle } from '../styles';
import type { ValidateOtpPagePropsType } from '../types';

export default function ValidateOtpPage({
  config,
  loginPath,
  onValidateOtpSuccess,
}: ValidateOtpPagePropsType) {
  useTitleHook('Validate OTP');

  const { t } = useTranslation(VALIDATE_OTP_TRANSLATION_NAMESPACE_CONSTANT);

  const {
    inputRefs,
    form,
    alert,
    mutation,
    resendMutation,
    onSubmit,
    handleResend,
    handleChange,
    handleKeyDown,
  } = useValidateOtpPageHook({ config, onValidateOtpSuccess });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Box sx={validateOtpPageStyle.containerStyle}>
        {alert && (
          <Alert severity={alert.type} sx={validateOtpPageStyle.alertStyle}>
            {alert.message}
          </Alert>
        )}
        <Typography variant="h6" color="primary">
          {t('validateOtp')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('subtitle')}
        </Typography>
        <Card sx={validateOtpPageStyle.cardStyle}>
          <Box sx={validateOtpPageStyle.boxesRowStyle}>
            {Array.from({
              length: config.otpLength,
            }).map((_, index) => (
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
                    onChange={(e) => handleChange(index, e.target.value, field.onChange)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    variant="outlined"
                    error={!!fieldState.error}
                    slotProps={{
                      htmlInput: {
                        maxLength: 1,
                      },
                    }}
                    sx={validateOtpPageStyle.otpBoxStyle}
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
          <CountdownResendComponent
            resendCooldown={config.resendCooldown}
            onResend={handleResend}
            isPending={resendMutation.isPending}
          />
          <Typography>
            <MuiLink component={Link} to={loginPath}>
              {t('backToLogin')}
            </MuiLink>
          </Typography>
        </Card>
      </Box>
    </form>
  );
}
