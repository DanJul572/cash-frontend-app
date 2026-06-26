import { Controller } from 'react-hook-form';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { useTitle } from '@hooks';

import { PasswordFieldComponent } from '../components';
import { useChangePassword } from '../hooks';
import { changePasswordStyle } from '../styles';

export default function ChangePasswordPage() {
    useTitle('Change Password');

    const { t, form, alert, mutation, onSubmit } = useChangePassword();

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={changePasswordStyle.container}>
                {alert && (
                    <Alert severity={alert.type} sx={changePasswordStyle.alert}>
                        {alert.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('changePassword')}
                </Typography>
                <Card sx={changePasswordStyle.card}>
                    <Controller
                        name="newPassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <PasswordFieldComponent
                                {...field}
                                label={t('newPassword.label')}
                                variant="outlined"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={t(fieldState.error?.message || '')}
                            />
                        )}
                    />
                    <Controller
                        name="confirmNewPassword"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <PasswordFieldComponent
                                {...field}
                                label={t('confirmNewPassword.label')}
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
                </Card>
            </Box>
        </form>
    );
}
