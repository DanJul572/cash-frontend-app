import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
} as const satisfies SxProps<Theme>;

const buttonStyle = {
    mt: 1,
    textTransform: 'none',
    fontSize: 12,
} as const satisfies SxProps<Theme>;

export const jsonPreviewComponentStyle = {
    containerStyle,
    buttonStyle,
} satisfies Record<string, SxProps<Theme>>;
