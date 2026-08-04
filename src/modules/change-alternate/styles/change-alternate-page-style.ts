import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  gap: 3,
  height: '100vh',
} as const satisfies SxProps<Theme>;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: 3,
  width: '100%',
  maxWidth: 800,
} as const satisfies SxProps<Theme>;

export const changeAlternateStyle = {
  containerStyle,
  gridStyle,
} satisfies Record<string, SxProps<Theme>>;
