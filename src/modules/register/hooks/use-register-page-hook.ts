import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessageUtil } from '@utils';

import { usePostRegisterMutation } from '../mutations';
import { registerFormSchema } from '../schemas';
import type { ALertType, RegisterFormType } from '../types';

export default function useRegisterPageHook() {
    const { t } = useTranslation('register');

    const form = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostRegisterMutation({
        onSuccess: (_res) => {},
        onError: (error) => {
            setAlert({
                type: 'error',
                message: getErrorMessageUtil(error.message),
            });
        },
    });

    const onSubmit = (values: RegisterFormType) => {
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
