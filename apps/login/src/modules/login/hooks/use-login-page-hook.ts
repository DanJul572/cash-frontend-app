import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@zapplib/core';

import { useLoginMutation } from '../mutations';
import { loginFormSchema } from '../schemas';
import type { ALertType, LoginFormType, LoginPagePropsType } from '../types';

const formatPayloads = (values: LoginFormType) => {
  return {
    email: values.email.trim(),
    password: values.password.trim(),
  };
};

export default function useLoginPageHook({
  config,
  onLoginSuccess,
}: Pick<LoginPagePropsType, 'config' | 'onLoginSuccess'>) {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema(config)),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<ALertType | null>(null);

  const mutation = useLoginMutation(config, {
    onSuccess: () => onLoginSuccess(),
    onError: (error) => {
      setAlert({
        type: 'error',
        message: getErrorMessage(error),
      });
    },
  });

  const onSubmit = (values: LoginFormType) => {
    mutation.mutate(formatPayloads(values));
  };

  return {
    form,
    alert,
    mutation,
    onSubmit,
  };
}
