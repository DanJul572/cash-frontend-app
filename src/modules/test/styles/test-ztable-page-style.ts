import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  p: 3,
} as const satisfies SxProps<Theme>;

export const testZTablePageStyle = {
  containerStyle,
} satisfies Record<string, SxProps<Theme>>;
