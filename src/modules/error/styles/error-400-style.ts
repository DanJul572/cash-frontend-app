import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
} as const satisfies SxProps<Theme>;

const codeStyle = {
  fontSize: { xs: '72px', md: '96px' },
  fontWeight: 500,
  letterSpacing: '-4px',
  color: 'text.primary',
  lineHeight: 1,
  mb: 1.5,
} as const satisfies SxProps<Theme>;

const dividerStyle = {
  width: 48,
  borderBottomWidth: 2,
  borderColor: 'primary.main',
  mb: 2.5,
} as const satisfies SxProps<Theme>;

const textStyle = {
  fontWeight: 500,
  color: 'text.secondary',
  letterSpacing: '0.5px',
} as const satisfies SxProps<Theme>;

export const error400Style = {
  codeStyle,
  containerStyle,
  dividerStyle,
  textStyle,
} satisfies Record<string, SxProps<Theme>>;
