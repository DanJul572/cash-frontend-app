import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { PasswordFieldComponent } from '@components';
import { useTitleHook } from '@hooks';

import { changePasswordConfig } from '../configs';
import { useChangePassword } from '../hooks';
import { changePasswordStyle } from '../styles';

export default function ChangePasswordPage() {
    useTitleHook('Change Password');

    const { t } = useTranslation('changePassword');

    const { form, alert, mutation, onSubmit } = useChangePassword();

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={changePasswordStyle.container}>
                {alert && (
                    <Alert severity={alert.type} sx={changePasswordStyle.alert}>
                        {alert.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('title')}
                </Typography>
                <Card sx={changePasswordStyle.card}>
                    <Controller
                        name="newPassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <PasswordFieldComponent
                                {...field}
                                label={t('form.newPasswordField.label')}
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={t(
                                    fieldState.error?.message || '',
                                    changePasswordConfig,
                                )}
                            />
                        )}
                    />
                    <Controller
                        name="confirmNewPassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <PasswordFieldComponent
                                {...field}
                                label={t('form.confirmNewPasswordField.label')}
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={t(
                                    fieldState.error?.message || '',
                                    changePasswordConfig,
                                )}
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
                        {t('form.submitButton.label')}
                    </Button>
                </Card>
            </Box>
        </form>
    );
}
