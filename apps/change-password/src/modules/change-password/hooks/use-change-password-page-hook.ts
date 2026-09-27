import { useState, useMemo } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@zapplib/core';

import { useChangePasswordMutation } from '../mutations';
import { useValidatePasswordTokenQuery } from '../queries';
import { changePasswordFormSchema } from '../schemas';
import type { AlertType, ChangePasswordFormType, ChangePasswordPagePropsType } from '../types';

export default function useChangePasswordPageHook({ config, token }: ChangePasswordPagePropsType) {
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
    resolver: zodResolver(changePasswordFormSchema(config)),
    defaultValues: { newPassword: '', confirmNewPassword: '' },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<AlertType | null>(null);

  const mutation = useChangePasswordMutation(
    {
      onSuccess: (res) => setAlert({ type: 'success', message: res.message }),
      onError: (error) => setAlert({ type: 'error', message: getErrorMessage(error.message) }),
    },
    config,
  );

  const onSubmit = (values: ChangePasswordFormType) => mutation.mutate(values);

  return { form, alert, mutation, onSubmit, validationAlert, isValidating, validationData };
}
