import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useCountdownResendComponentHook from '../hooks/use-countdown-resend-component-hook';

type CountdownResendComponentProps = {
    onResend: () => void;
    isPending: boolean;
};

export default function CountdownResendComponent({
    onResend,
    isPending,
}: CountdownResendComponentProps) {
    const { t } = useTranslation('validateOtp');
    const { secondsRemaining, isDisabled, resetCountdown } = useCountdownResendComponentHook();

    const handleResend = () => {
        onResend();
        resetCountdown();
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
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
