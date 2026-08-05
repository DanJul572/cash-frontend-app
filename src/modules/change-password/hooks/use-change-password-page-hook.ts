import { useState, useMemo } from 'react';

import { useForm } from 'react-hook-form';

import { useSearch } from '@tanstack/react-router';

import { useGuestConfig } from '@contexts';
import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@utils';

import { useChangePasswordMutation } from '../mutations';
import { useValidatePasswordTokenQuery } from '../queries';
import { changePasswordFormSchema } from '../schemas';
import type { AlertType, ChangePasswordFormType } from '../types';

export default function useChangePasswordPageHook() {
  const { token } = useSearch({ from: '/_guest/change-password' });

  const config = useGuestConfig();
  const changePasswordConfig = config.modules.changePassword;

  const {
    data: validationData,
    isLoading: isValidating,
    isError: isValidationError,
    error: validationError,
  } = useValidatePasswordTokenQuery(token);

  const validationAlert = useMemo<AlertType | null>(() => {
    if (!token) {
      return { type: 'error', message: 'Token is required' };
    }

    if (isValidationError) {
      return { type: 'error', message: getErrorMessage(validationError) };
    }

    if (validationData && !validationData.tokenIsValid) {
      return { type: 'error', message: 'Token is invalid' };
    }

    return null;
  }, [token, isValidationError, validationError, validationData]);

  const form = useForm<ChangePasswordFormType>({
    resolver: zodResolver(changePasswordFormSchema(changePasswordConfig)),
    defaultValues: { newPassword: '', confirmNewPassword: '' },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<AlertType | null>(null);

  const mutation = useChangePasswordMutation(
    {
      onSuccess: (res) => setAlert({ type: 'success', message: res.message }),
      onError: (error) => setAlert({ type: 'error', message: getErrorMessage(error.message) }),
    },
    changePasswordConfig,
  );

  const onSubmit = (values: ChangePasswordFormType) => mutation.mutate(values);

  return { form, alert, mutation, onSubmit, validationAlert, isValidating, validationData };
}
