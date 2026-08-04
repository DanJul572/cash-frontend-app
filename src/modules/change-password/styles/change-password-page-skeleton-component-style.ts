import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: 1,
} as const satisfies SxProps<Theme>;

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

const alertStyle = { borderRadius: 1, marginBottom: 2 } as const satisfies SxProps<Theme>;

const buttonStyle = { borderRadius: 1 } as const satisfies SxProps<Theme>;

export const changePasswordPageSkeletonComponentStyle = {
  containerStyle,
  cardStyle,
  alertStyle,
  buttonStyle,
} satisfies Record<string, SxProps<Theme>>;
