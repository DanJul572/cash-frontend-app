import { useState } from 'react';

export default function usePasswordFieldComponentHook() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return { showPassword, setShowPassword };
}
