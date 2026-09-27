import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@zapplib/core';

import { useRegisterMutation } from '../mutations';
import { registerFormSchema } from '../schemas';
import type { ALertType, RegisterFormType, RegisterPagePropsType } from '../types';

export default function useRegisterPageHook({ config }: Pick<RegisterPagePropsType, 'config'>) {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema(config)),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<ALertType | null>(null);

  const mutation = useRegisterMutation(config, {
    onSuccess: (_res) => {},
    onError: (error) => {
      setAlert({
        type: 'error',
        message: getErrorMessage(error.message),
      });
    },
  });

  const onSubmit = (values: RegisterFormType) => {
    mutation.mutate(values);
  };

  return {
    form,
    alert,
    mutation,
    onSubmit,
  };
}
