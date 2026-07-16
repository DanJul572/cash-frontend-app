import type { SxProps, Theme } from '@mui/material';

const containerStyle = { textAlign: 'center' } satisfies SxProps<Theme>;

export const countdownResendComponentStyle = {
    containerStyle,
} satisfies Record<string, SxProps<Theme>>;
