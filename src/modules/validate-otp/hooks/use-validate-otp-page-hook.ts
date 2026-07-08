import { useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessageUtil } from '@utils';

import { validateOtpConfig } from '../configs';
import { usePostValidateOtpMutation } from '../mutations';
import { validateOtpFormSchema } from '../schemas';
import type { ALertType, ValidateOtpFormType } from '../types';

export default function useValidateOtpPageHook() {
    const { t } = useTranslation('validateOtp');

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const form = useForm<ValidateOtpFormType>({
        resolver: zodResolver(validateOtpFormSchema),
        defaultValues: { otp: Array(validateOtpConfig.otpLength).fill('') },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostValidateOtpMutation({
        onSuccess: (_data) => {
            setAlert({
                type: 'success',
                message: t('success.otpValidated'),
            });
        },
        onError: (error) => {
            setAlert({
                type: 'error',
                message: getErrorMessageUtil(error),
            });
        },
    });

    const onSubmit = (values: ValidateOtpFormType) => {
        mutation.mutate(values);
    };

    const handleChange = (
        index: number,
        value: string,
        onChange: (v: string) => void,
    ) => {
        const digit = value.replace(/\D/g, '').slice(-1);
        onChange(digit);
        if (digit && index < validateOtpConfig.otpLength - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLDivElement>,
    ) => {
        if (
            e.key === 'Backspace' &&
            !form.getValues(`otp.${index}`) &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return {
        t,
        inputRefs,
        form,
        alert,
        mutation,
        onSubmit,
        handleChange,
        handleKeyDown,
    };
}
