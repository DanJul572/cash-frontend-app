import { useCallback, useEffect, useRef, useState } from 'react';

import { useGuestConfig } from '@contexts';

export default function useCountdownResendComponentHook() {
  const config = useGuestConfig();
  const validateOtpConfig = config.modules.validateOtp;

  const [secondsRemaining, setSecondsRemaining] = useState(validateOtpConfig.resendCooldown);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isDisabled = secondsRemaining > 0;

  const clearCountdown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resetCountdown = useCallback(() => {
    clearCountdown();
    setSecondsRemaining(validateOtpConfig.resendCooldown);
  }, [clearCountdown, validateOtpConfig.resendCooldown]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearCountdown();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearCountdown;
  }, [clearCountdown]);

  return { secondsRemaining, isDisabled, resetCountdown };
}
