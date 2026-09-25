import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
} as const satisfies SxProps<Theme>;

export const dashboardPageStyle = {
  containerStyle,
} satisfies Record<string, SxProps<Theme>>;
