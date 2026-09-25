import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  maxWidth: 720,
} as const satisfies SxProps<Theme>;

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.5,
  p: 2.5,
} as const satisfies SxProps<Theme>;

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 1,
} as const satisfies SxProps<Theme>;

const valueStyle = {
  fontFamily: 'monospace',
  fontSize: 13,
  color: 'text.secondary',
  wordBreak: 'break-all',
} as const satisfies SxProps<Theme>;

export const testDatetimePageStyle = {
  containerStyle,
  cardStyle,
  headerStyle,
  valueStyle,
} satisfies Record<string, SxProps<Theme>>;
