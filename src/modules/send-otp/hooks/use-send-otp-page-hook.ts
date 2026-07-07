import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessageUtil } from '@utils';

import { sendOtpConfig } from '../configs';
import { usePostSendOtpMutation } from '../mutations';
import { sendOtpFormSchema } from '../schemas';
import type { ALertType, SendOtpFormType } from '../types';

const formatPayloads = (values: SendOtpFormType) => {
    return {
        email: values.email.trim(),
    };
};

export default function useSendOtpPageHook() {
    const { t } = useTranslation('sendOtp');

    const form = useForm<SendOtpFormType>({
        resolver: zodResolver(sendOtpFormSchema),
        defaultValues: { email: '' },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostSendOtpMutation({
        onSuccess: (_data) => {
            setAlert({
                type: 'success',
                message: t('success.otpSent', { otpLength: sendOtpConfig.otpLength }),
            });
        },
        onError: (error) => {
            setAlert({
                type: 'error',
                message: getErrorMessageUtil(error),
            });
        },
    });

    const onSubmit = (values: SendOtpFormType) => {
        mutation.mutate(formatPayloads(values));
    };

    return {
        t,
        form,
        alert,
        mutation,
        onSubmit,
    };
}
