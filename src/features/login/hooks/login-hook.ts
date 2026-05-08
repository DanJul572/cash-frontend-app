import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema } from '../schemas';
import type { LoginFormValuesType } from '../types';

export default function useLogin() {
  const form = useForm<LoginFormValuesType>({
    resolver: zodResolver(loginSchema.schema),
    defaultValues: { email: '', password: '' },
    mode: 'onTouched',
  });

  const onSubmit = (values: LoginFormValuesType) => {
    console.log(values);
  };

  return {
    form,
    onSubmit,
  };
}
