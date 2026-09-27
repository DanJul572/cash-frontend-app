import { useCallback, useEffect, useRef, useState } from 'react';

export default function useCountdownResendComponentHook(resendCooldown: number) {
  const [secondsRemaining, setSecondsRemaining] = useState(resendCooldown);

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
    setSecondsRemaining(resendCooldown);
  }, [clearCountdown, resendCooldown]);

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
