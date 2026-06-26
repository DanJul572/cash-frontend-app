import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import { getErrorMessageUtil } from '@utils';

import { usePostChangePasswordMutation } from '../mutations';
import { changePasswordFormSchema } from '../schemas';
import type { ALertType, ChangePasswordFormType } from '../types';

export default function useChangePassword() {
    const { t } = useTranslation('changePassword');

    const form = useForm<ChangePasswordFormType>({
        resolver: zodResolver(changePasswordFormSchema),
        defaultValues: { newPassword: '', confirmNewPassword: '' },
        mode: 'onSubmit',
    });

    const [alert, setAlert] = useState<ALertType | null>(null);

    const mutation = usePostChangePasswordMutation();

    const onSubmit = (values: ChangePasswordFormType) => {
        mutation.mutate(values, {
            onSuccess: (res) => {
                setAlert({
                    type: 'success',
                    message: res.message,
                });
            },
            onError: (error) => {
                setAlert({
                    type: 'error',
                    message: getErrorMessageUtil(error.message),
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
