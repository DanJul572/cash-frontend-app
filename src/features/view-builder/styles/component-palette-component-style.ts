import type { SxProps, Theme } from '@mui/material';

const containerStyle = { width: 180, flexShrink: 0 } as const satisfies SxProps<Theme>;
const titleStyle = {
    fontSize: 11,
    letterSpacing: '0.08em',
    display: 'block',
    mb: 1.5,
} as const satisfies SxProps<Theme>;
const buttonComponentStyle = {
    mb: 0.75,
    justifyContent: 'flex-start',
    textTransform: 'none',
    borderColor: 'divider',
    color: 'text.primary',
    fontSize: 13,
} as const satisfies SxProps<Theme>;
const dividerStyle = { my: 1.5 } as const satisfies SxProps<Theme>;

export const componentPaletteComponentStyle = {
    buttonComponentStyle,
    containerStyle,
    dividerStyle,
    titleStyle,
} satisfies Record<string, SxProps<Theme>>;
