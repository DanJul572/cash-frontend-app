import type { SxProps, Theme } from '@mui/material';

const alertStyle = {
  width: '100%',
  alignItems: 'flex-start',
} satisfies SxProps<Theme>;

const codeStyle = {
  display: 'inline-block',
  mt: 1,
  px: 1,
  py: 0.25,
  borderRadius: 1,
  fontFamily: 'monospace',
  fontSize: 12,
  backgroundColor: (theme: Theme) => theme.palette.action.hover,
} satisfies SxProps<Theme>;

export const dateTimeFormatErrorComponentStyle = {
  alertStyle,
  codeStyle,
} satisfies Record<string, SxProps<Theme>>;
