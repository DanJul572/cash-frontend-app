import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { usePostLoginMutation } from '../mutations';
import { loginSchema } from '../schemas';
import type { ALertType, LoginFormValuesType } from '../types';

export default function useLogin() {
  const { t } = useTranslation('login');

  const form = useForm<LoginFormValuesType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<ALertType | null>(null);

  const mutation = usePostLoginMutation({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      setAlert({
        type: 'error',
        message: error.message || t('error.loginFailed'),
      });
    },
  });

  const onSubmit = (values: LoginFormValuesType) => {
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
