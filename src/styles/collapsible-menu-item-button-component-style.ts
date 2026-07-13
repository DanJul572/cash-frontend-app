import type { SxProps, Theme } from '@mui/material';

const chevronRightStyle = {
    color: 'text.secondary',
} as const satisfies SxProps<Theme>;
const iconStyle = { color: 'primary.main' } as const satisfies SxProps<Theme>;
const listItemButtonStyle = { py: 0.5 } as const satisfies SxProps<Theme>;
const listItemIconStyle = { minWidth: 36 } as const satisfies SxProps<Theme>;

export const collapsibleMenuItemButtonComponentStyle = {
    chevronRightStyle,
    iconStyle,
    listItemButtonStyle,
    listItemIconStyle,
} satisfies Record<string, SxProps<Theme>>;
