import { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@zapplib/core';

import { useResendOtpMutation, useValidateOtpMutation } from '../mutations';
import { validateOtpFormSchema } from '../schemas';
import type { ALertType, ValidateOtpFormType, ValidateOtpPagePropsType } from '../types';

export default function useValidateOtpPageHook({
  config,
  onValidateOtpSuccess,
}: Pick<ValidateOtpPagePropsType, 'config' | 'onValidateOtpSuccess'>) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const form = useForm<ValidateOtpFormType>({
    resolver: zodResolver(validateOtpFormSchema(config)),
    defaultValues: { otp: Array(config.otpLength).fill('') },
    mode: 'onSubmit',
  });

  const [alert, setAlert] = useState<ALertType | null>(null);

  const mutation = useValidateOtpMutation(config, {
    onSuccess: () => onValidateOtpSuccess(),
    onError: (error) => {
      setAlert({
        type: 'error',
        message: getErrorMessage(error),
      });
    },
  });

  const resendMutation = useResendOtpMutation({
    onSuccess: (res) => {
      setAlert({
        type: 'success',
        message: res.message,
      });
    },
    onError: (error) => {
      setAlert({
        type: 'error',
        message: getErrorMessage(error),
      });
    },
  });

  const onSubmit = (values: ValidateOtpFormType) => {
    mutation.mutate(values);
  };

  const handleResend = () => {
    resendMutation.mutate();
  };

  const handleChange = (index: number, value: string, onChange: (v: string) => void) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    onChange(digit);
    if (digit && index < config.otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Backspace' && !form.getValues(`otp.${index}`) && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return {
    inputRefs,
    form,
    alert,
    mutation,
    resendMutation,
    onSubmit,
    handleResend,
    handleChange,
    handleKeyDown,
  };
}
