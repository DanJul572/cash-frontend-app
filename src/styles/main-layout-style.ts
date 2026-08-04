import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
} as const satisfies SxProps<Theme>;

const contentStyle = {
  bottom: 0,
  left: '350px',
  overflowY: 'auto',
  padding: '20px',
  position: 'fixed',
  right: 0,
  top: '64px',
  transition: 'left 0.3s ease-in-out',
} as const satisfies SxProps<Theme>;

export const mainLayoutStyle = {
  containerStyle,
  contentStyle,
} satisfies Record<string, SxProps<Theme>>;
