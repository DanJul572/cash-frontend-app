import { Controller, type Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import { PasswordFieldComponent } from '@components';
import { useGuestConfig } from '@contexts';

import { changePasswordFormComponentStyle } from '../styles';
import type { ChangePasswordFormType } from '../types';

export default function ChangePasswordFormComponent({
  control,
  isPending,
}: {
  control: Control<ChangePasswordFormType>;
  isPending: boolean;
}) {
  const { t } = useTranslation('changePassword');
  const config = useGuestConfig();

  return (
    <Card sx={changePasswordFormComponentStyle.cardStyle}>
      <Controller
        name="newPassword"
        control={control}
        render={({ field, fieldState }) => (
          <PasswordFieldComponent
            {...field}
            label={t('form.newPasswordField.label')}
            variant="outlined"
            fullWidth
            error={!!fieldState.error}
            helperText={t(fieldState.error?.message || '', config.modules.changePassword)}
          />
        )}
      />
      <Controller
        name="confirmNewPassword"
        control={control}
        render={({ field, fieldState }) => (
          <PasswordFieldComponent
            {...field}
            label={t('form.confirmNewPasswordField.label')}
            variant="outlined"
            fullWidth
            error={!!fieldState.error}
            helperText={t(fieldState.error?.message || '', config.modules.changePassword)}
          />
        )}
      />
      <Button variant="contained" fullWidth type="submit" disabled={isPending} loading={isPending}>
        {t('form.submitButton.label')}
      </Button>
    </Card>
  );
}
