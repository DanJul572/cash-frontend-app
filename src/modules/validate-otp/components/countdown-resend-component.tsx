import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useCountdownResendComponentHook } from '../hooks';
import { countdownResendComponentStyle } from '../styles';
import type { CountdownResendComponentPropsType } from '../types';

export default function CountdownResendComponent({
    onResend,
    isPending,
}: CountdownResendComponentPropsType) {
    const { t } = useTranslation('validateOtp');
    const { secondsRemaining, isDisabled, resetCountdown } = useCountdownResendComponentHook();

    const handleResend = () => {
        onResend();
        resetCountdown();
    };

    return (
        <Box sx={countdownResendComponentStyle.containerStyle}>
            {isDisabled ? (
                <Typography variant="body2" color="text.secondary">
                    {t('resendIn', { seconds: secondsRemaining })}
                </Typography>
            ) : (
                <Button
                    variant="text"
                    size="small"
                    onClick={handleResend}
                    disabled={isPending}
                    loading={isPending}
                >
                    {t('resendOtp')}
                </Button>
            )}
        </Box>
    );
}
