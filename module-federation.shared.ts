// Libraries holding page-wide state (React tree, theme and emotion cache, query cache, router,
// i18n store, the @zapplib/core HTTP client registry) must exist once on the page, so the host
// and every remote share them as singletons.
const singletonPackages = [
  'react',
  'react-dom',
  '@emotion/react',
  '@emotion/styled',
  // A trailing slash also shares deep imports such as '@mui/material/TextField'
  '@mui/material/',
  '@tanstack/react-query',
  '@tanstack/react-router',
  'i18next',
  'react-i18next',
  '@zapplib/core',
  '@zapplib/ui/',
];

/** Shared config for the singletons an app actually depends on (from its package.json). */
export const getFederationShared = (dependencies: Record<string, string>) =>
  Object.fromEntries(
    singletonPackages
      .filter((name) => name.replace(/\/$/, '') in dependencies)
      .map((name) => [name, { singleton: true }]),
  );

/** Every remote: its Module Federation name, its folder under apps/ and its local dev port. */
export const federationRemotes = {
  forgotPassword: { dir: 'forgot-password', port: 5174 },
  login: { dir: 'login', port: 5175 },
  register: { dir: 'register', port: 5176 },
  validateOtp: { dir: 'validate-otp', port: 5177 },
  changePassword: { dir: 'change-password', port: 5178 },
  changeAlternate: { dir: 'change-alternate', port: 5179 },
  dashboard: { dir: 'dashboard', port: 5180 },
  welcome: { dir: 'welcome', port: 5181 },
} as const;

type FederationRemoteNameType = keyof typeof federationRemotes;

/** Env var that overrides a remote's entry URL, e.g. VITE_REMOTE_FORGOT_PASSWORD_ENTRY. */
export const getRemoteEntryEnvKey = (name: FederationRemoteNameType) =>
  `VITE_REMOTE_${name.replace(/[A-Z]/g, (char) => `_${char}`).toUpperCase()}_ENTRY`;

/** The host's `remotes` option; each entry defaults to the remote's local dev server. */
export const getFederationRemotes = (env: Record<string, string>) =>
  Object.fromEntries(
    (Object.keys(federationRemotes) as FederationRemoteNameType[]).map((name) => [
      name,
      {
        type: 'module' as const,
        name,
        entry:
          env[getRemoteEntryEnvKey(name)] ||
          `http://localhost:${federationRemotes[name].port}/remoteEntry.js`,
      },
    ]),
  );
