import type { SxProps, Theme } from '@mui/material';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  gap: 2,
  width: '400px',
  margin: '0 auto',
} as const satisfies SxProps<Theme>;

export const changePasswordFormComponentStyle = {
  cardStyle,
} satisfies Record<string, SxProps<Theme>>;
