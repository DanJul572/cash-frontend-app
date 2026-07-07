import { useState } from 'react';

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

    return {
        t,
        form,
        alert,
        mutation,
        onSubmit,
    };
}
