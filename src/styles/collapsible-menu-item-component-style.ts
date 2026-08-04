import type { SxProps, Theme } from '@mui/material';

const linkStyle = { textDecoration: 'none', color: 'inherit' } as const satisfies SxProps<Theme>;

export const collapsibleMenuItemComponentStyle = {
  linkStyle,
} satisfies Record<string, SxProps<Theme>>;
