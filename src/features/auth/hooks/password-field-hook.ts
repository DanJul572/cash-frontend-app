import { useState } from 'react';

import { useTranslation } from 'react-i18next';

export default function usePasswordField() {
    const { t } = useTranslation('login');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return { showPassword, setShowPassword, t };
}
