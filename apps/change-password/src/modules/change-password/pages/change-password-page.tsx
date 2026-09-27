import { useTranslation } from 'react-i18next';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@zapplib/core';

import { ChangePasswordFormComponent, ChangePasswordPageSkeletonComponent } from '../components';
import { CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT } from '../constants';
import { useChangePasswordPageHook } from '../hooks';
import { changePasswordStyle } from '../styles';
import type { ChangePasswordPagePropsType } from '../types';

export default function ChangePasswordPage({ config, token }: ChangePasswordPagePropsType) {
  useTitleHook('Change Password');

  const { t } = useTranslation(CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT);
  const { form, alert, mutation, onSubmit, validationAlert, isValidating } =
    useChangePasswordPageHook({ config, token });

  if (isValidating) {
    return <ChangePasswordPageSkeletonComponent />;
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <Box sx={changePasswordStyle.containerStyle}>
        {(alert || validationAlert) && (
          <Alert severity={(alert ?? validationAlert)!.type} sx={changePasswordStyle.alertStyle}>
            {(alert ?? validationAlert)!.message}
          </Alert>
        )}
        <Typography variant="h6" color="primary">
          {t('title')}
        </Typography>
        <ChangePasswordFormComponent
          config={config}
          control={form.control}
          isPending={mutation.isPending}
        />
      </Box>
    </form>
  );
}
