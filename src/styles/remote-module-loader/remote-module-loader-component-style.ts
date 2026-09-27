import type { SxProps, Theme } from '@mui/material';

// Absolute + inset fills the nearest positioned ancestor: the fixed content area in the main
// layout, or the viewport in the guest layout, so the loader is centered where the page appears.
const containerStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  inset: 0,
  justifyContent: 'center',
  position: 'absolute',
  // Wait briefly before fading in, so a remote that loads fast never flashes a spinner
  animation: 'remoteModuleLoaderFadeIn 300ms ease-out 200ms both',
  '@keyframes remoteModuleLoaderFadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
} satisfies SxProps<Theme>;

const labelStyle = {
  color: (theme: Theme) => theme.palette.text.secondary,
  fontSize: 14,
  fontWeight: 500,
} satisfies SxProps<Theme>;

export const remoteModuleLoaderComponentStyle = {
  containerStyle,
  labelStyle,
} satisfies Record<string, SxProps<Theme>>;
