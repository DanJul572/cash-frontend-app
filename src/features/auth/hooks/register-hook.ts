import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { usePostRegisterMutation } from '../mutations';
import { registerFormSchema } from '../schemas';
import type { ALertType, RegisterFormType } from '../types';

export default function useRegister() {
    const { t } = useTranslation('register');

    const form = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostRegisterMutation();

    const onSubmit = (values: RegisterFormType) => {
        mutation.mutate(values, {
            onSuccess: () => {
                setAlert({
                    type: 'success',
                    message: t('success.registerSuccess'),
                });
            },
            onError: (error) => {
                setAlert({
                    type: 'error',
                    message: error.message,
                });
            },
        });
    };

    return {
        t,
        form,
        alert,
        mutation,
        onSubmit,
    };
}
