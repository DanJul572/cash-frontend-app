import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { useGuestConfig } from '@contexts';
import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@utils';

import { usePostLoginMutation } from '../mutations';
import { loginFormSchema } from '../schemas';
import type { ALertType, LoginFormType } from '../types';

const formatPayloads = (values: LoginFormType) => {
    return {
        email: values.email.trim(),
        password: values.password.trim(),
    };
};

export default function useLoginPageHook() {
    const config = useGuestConfig();
    const loginConfig = config.modules.login;

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const form = useForm<LoginFormType>({
        resolver: zodResolver(loginFormSchema(config.modules.login)),
        defaultValues: { email: '', password: '' },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostLoginMutation(loginConfig, {
        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
            navigate({ to: '/dashboard' });
        },
        onError: (error) => {
            setAlert({
                type: 'error',
                message: getErrorMessage(error),
            });
        },
    });

    const onSubmit = (values: LoginFormType) => {
        mutation.mutate(formatPayloads(values));
    };

    return {
        form,
        alert,
        mutation,
        onSubmit,
    };
}
