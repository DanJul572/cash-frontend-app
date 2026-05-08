import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginFormValues } from '../schemas';

export default function useLogin() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onTouched',
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  return {
    form,
    onSubmit,
  };
}
