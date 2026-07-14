import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessage } from '@utils';

import { usePostChangePasswordMutation } from '../mutations';
import { changePasswordFormSchema } from '../schemas';
import type { ALertType, ChangePasswordFormType } from '../types';

export default function useChangePassword() {
    const form = useForm<ChangePasswordFormType>({
        resolver: zodResolver(changePasswordFormSchema),
        defaultValues: { newPassword: '', confirmNewPassword: '' },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostChangePasswordMutation({
        onSuccess: (res) => {
            setAlert({ type: 'success', message: res.message });
        },
        onError: (error) => {
            setAlert({
                type: 'error',
                message: getErrorMessage(error.message),
            });
        },
    });

    const onSubmit = (values: ChangePasswordFormType) => {
        mutation.mutate(values);
    };

    return { form, alert, mutation, onSubmit };
}
