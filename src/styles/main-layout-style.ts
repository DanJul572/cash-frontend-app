import type { SxProps, Theme } from '@mui/material';

import { LAYOUT_HEADER_HEIGHT_CONSTANT } from '@constants';

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
  top: LAYOUT_HEADER_HEIGHT_CONSTANT,
} as const satisfies SxProps<Theme>;

export const mainLayoutStyle = {
  containerStyle,
  contentStyle,
} satisfies Record<string, SxProps<Theme>>;
