// Pages loaded at runtime from Module Federation remotes (see vite.app.config.ts). Declared here
// so the host typecheck never depends on a remote being up; keep in sync with each remote's props.

declare module 'forgotPassword/ForgotPasswordPage' {
  import type { ComponentType } from 'react';

  import type { LinkProps } from '@tanstack/react-router';

  const ForgotPasswordPage: ComponentType<{ loginPath: LinkProps['to'] }>;
  export default ForgotPasswordPage;
}

declare module 'login/LoginPage' {
  import type { ComponentType } from 'react';

  import type { LinkProps } from '@tanstack/react-router';

  import type { GuestModulesConfigType } from '@zapplib/core';

  const LoginPage: ComponentType<{
    config: GuestModulesConfigType['login'];
    forgotPasswordPath: LinkProps['to'];
    registerPath: LinkProps['to'];
    onLoginSuccess: () => void;
  }>;
  export default LoginPage;
}

declare module 'register/RegisterPage' {
  import type { ComponentType } from 'react';

  import type { LinkProps } from '@tanstack/react-router';

  import type { GuestModulesConfigType } from '@zapplib/core';

  const RegisterPage: ComponentType<{
    config: GuestModulesConfigType['register'];
    loginPath: LinkProps['to'];
  }>;
  export default RegisterPage;
}

declare module 'validateOtp/ValidateOtpPage' {
  import type { ComponentType } from 'react';

  import type { LinkProps } from '@tanstack/react-router';

  import type { GuestModulesConfigType } from '@zapplib/core';

  const ValidateOtpPage: ComponentType<{
    config: GuestModulesConfigType['validateOtp'];
    loginPath: LinkProps['to'];
    onValidateOtpSuccess: () => void;
  }>;
  export default ValidateOtpPage;
}

declare module 'changePassword/ChangePasswordPage' {
  import type { ComponentType } from 'react';

  import type { GuestModulesConfigType } from '@zapplib/core';

  const ChangePasswordPage: ComponentType<{
    config: GuestModulesConfigType['changePassword'];
    token?: string;
  }>;
  export default ChangePasswordPage;
}

declare module 'changeAlternate/ChangeAlternatePage' {
  import type { ComponentType } from 'react';

  const ChangeAlternatePage: ComponentType<{
    token?: string;
    onInvalidToken: () => void;
    onChangeAlternateSuccess: () => void;
  }>;
  export default ChangeAlternatePage;
}

declare module 'dashboard/DashboardPage' {
  import type { ComponentType } from 'react';

  const DashboardPage: ComponentType;
  export default DashboardPage;
}

declare module 'welcome/WelcomePage' {
  import type { ComponentType } from 'react';

  const WelcomePage: ComponentType<{ appName: string }>;
  export default WelcomePage;
}
