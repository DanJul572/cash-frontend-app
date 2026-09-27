import type { SxProps, Theme } from '@mui/material';

const containerStyle = {} as const satisfies SxProps<Theme>;

export const playgroundZTablePageStyle = {
  containerStyle,
} satisfies Record<string, SxProps<Theme>>;
