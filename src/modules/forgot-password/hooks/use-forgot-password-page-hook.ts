import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@utils';

import { usePostForgotPasswordMutation } from '../mutations';
import { forgotPasswordFormSchema } from '../schemas';
import type { ALertType, ForgotPasswordFormType } from '../types';

export default function useForgotPasswordPageHook() {
    const { t } = useTranslation('forgotPassword');

    const form = useForm<ForgotPasswordFormType>({
        resolver: zodResolver(forgotPasswordFormSchema),
        defaultValues: { email: '' },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostForgotPasswordMutation({
        onSuccess: (res) => {
            setAlert({
                type: 'success',
                message: res.message,
            });
        },
        onError: (error) => {
            setAlert({
                type: 'error',
                message: getErrorMessage(error.message),
            });
        },
    });

    const onSubmit = (values: ForgotPasswordFormType) => {
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
