import type { SxProps, Theme } from '@mui/material';

const buttonStyle = {
    color: 'primary.main',
    mb: 0.5,
} as const satisfies SxProps<Theme>;

export const collapsibleMenuIconStyle = {
    buttonStyle,
} satisfies Record<string, SxProps<Theme>>;
