import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { usePostLoginMutation } from '../mutations';
import { loginSchema } from '../schemas';
import type { LoginFormValuesType } from '../types';

export default function useLogin() {
  const form = useForm<LoginFormValuesType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  });

  const mutation = usePostLoginMutation({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (values: LoginFormValuesType) => {
    mutation.mutate(values);
  };

  return {
    form,
    onSubmit,
  };
}
