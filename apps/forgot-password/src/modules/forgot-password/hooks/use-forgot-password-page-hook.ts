import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@zapplib/core';

import { FORGOT_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT } from '../constants';
import { useForgotPasswordMutation } from '../mutations';
import { forgotPasswordFormSchema } from '../schemas';
import type { ALertType, ForgotPasswordFormType } from '../types';

export default function useForgotPasswordPageHook() {
  const { t } = useTranslation(FORGOT_PASSWORD_TRANSLATION_NAMESPACE_CONSTANT);

  const form = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: { email: '' },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<ALertType | null>(null);

  const mutation = useForgotPasswordMutation({
    onSuccess: (res) => {
      setAlert({
        type: 'success',
        message: res.message,
      });
    },
    onError: (error) => {
      setAlert({
        type: 'error',
        message: getErrorMessage(error.message),
      });
    },
  });

  const onSubmit = (values: ForgotPasswordFormType) => {
    mutation.mutate(values);
  };

  return {
    t,
    form,
    alert,
    mutation,
    onSubmit,
  };
}
