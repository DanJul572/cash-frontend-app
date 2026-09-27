import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  height: '100vh',
  width: '100%',
  background: (theme: Theme) =>
    `radial-gradient(circle at center, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
} satisfies SxProps<Theme>;

const spinnerWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'pulse 1.8s ease-in-out infinite',
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.6, transform: 'scale(0.94)' },
  },
} satisfies SxProps<Theme>;

const spinnerStyle = {
  color: (theme: Theme) => theme.palette.primary.main,
} satisfies SxProps<Theme>;

const labelStyle = {
  color: (theme: Theme) => theme.palette.text.secondary,
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: 0.3,
} satisfies SxProps<Theme>;

export const pageLoaderComponentStyle = {
  containerStyle,
  spinnerWrapperStyle,
  spinnerStyle,
  labelStyle,
} satisfies Record<string, SxProps<Theme>>;
