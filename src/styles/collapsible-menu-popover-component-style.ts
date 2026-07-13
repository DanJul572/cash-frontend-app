import type { SxProps, Theme } from '@mui/material';

const popoverStyle = { minWidth: 220, py: 0.5 } as const satisfies SxProps<Theme>;

export const collapsedMenuPopoverComponentStyle = {
    popoverStyle,
} satisfies Record<string, SxProps<Theme>>;
