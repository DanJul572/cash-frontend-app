import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessageUtil } from '@utils';

import { usePostLoginMutation } from '../mutations';
import { loginFormSchema } from '../schemas';
import type { ALertType, LoginFormType } from '../types';

const formatPayloads = (values: LoginFormType) => {
    return {
        email: values.email.trim(),
        password: values.password.trim(),
    };
};

export default function useLogin() {
    const { t } = useTranslation('login');

    const form = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: { email: '', password: '' },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostLoginMutation({
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            setAlert({
                type: 'error',
                message: getErrorMessageUtil(error),
            });
        },
    });

    const onSubmit = (values: LoginFormType) => {
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
