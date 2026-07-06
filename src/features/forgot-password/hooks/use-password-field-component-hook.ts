import { useState } from 'react';

import { useTranslation } from 'react-i18next';

export default function usePasswordFieldHook() {
    const { t } = useTranslation('login');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return { showPassword, setShowPassword, t };
}
