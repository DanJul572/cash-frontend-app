import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

import PasswordFieldComponent from '@zapplib/ui/components/PasswordField';

import { CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT } from '../constants';
import { changePasswordFormComponentStyle } from '../styles';
import type { ChangePasswordFormComponentPropsType } from '../types';

export default function ChangePasswordFormComponent({
  config,
  control,
  isPending,
}: ChangePasswordFormComponentPropsType) {
  const { t } = useTranslation(CHANGE_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT);

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
            helperText={t(fieldState.error?.message || '', config)}
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
            helperText={t(fieldState.error?.message || '', config)}
          />
        )}
      />
      <Button variant="contained" fullWidth type="submit" disabled={isPending} loading={isPending}>
        {t('form.submitButton.label')}
      </Button>
    </Card>
  );
}
