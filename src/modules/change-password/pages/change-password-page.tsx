import { useTranslation } from 'react-i18next';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@hooks';

import { ChangePasswordFormComponent, ChangePasswordPageSkeletonComponent } from '../components';
import { useChangePasswordPageHook } from '../hooks';
import { changePasswordStyle } from '../styles';

export default function ChangePasswordPage() {
    useTitleHook('Change Password');

    const { t } = useTranslation('changePassword');
    const { form, alert, mutation, onSubmit, validationAlert, isValidating } =
        useChangePasswordPageHook();

    if (isValidating) {
        return <ChangePasswordPageSkeletonComponent />;
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <Box sx={changePasswordStyle.containerStyle}>
                {(alert || validationAlert) && (
                    <Alert
                        severity={(alert ?? validationAlert)!.type}
                        sx={changePasswordStyle.alertStyle}
                    >
                        {(alert ?? validationAlert)!.message}
                    </Alert>
                )}
                <Typography variant="h6" color="primary">
                    {t('title')}
                </Typography>
                <ChangePasswordFormComponent
                    control={form.control}
                    isPending={mutation.isPending}
                />
            </Box>
        </form>
    );
}
