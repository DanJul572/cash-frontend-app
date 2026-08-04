import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useGuestConfig } from '@contexts';
import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@utils';

import { usePostRegisterMutation } from '../mutations';
import { registerFormSchema } from '../schemas';
import type { ALertType, RegisterFormType } from '../types';

export default function useRegisterPageHook() {
  const config = useGuestConfig();
  const registerConfig = config.modules.register;

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema(config.modules.register)),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<ALertType | null>(null);

  const mutation = usePostRegisterMutation(registerConfig, {
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
