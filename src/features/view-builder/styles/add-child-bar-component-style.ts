import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.5,
    alignItems: 'center',
    mt: 0.5,
};
const buttonStyle: SxProps<Theme> = {
    fontSize: 11,
    minWidth: 0,
    px: 1,
    py: 0.25,
    textTransform: 'none',
    color: 'primary.main',
    '&:hover': { bgcolor: 'primary.50' },
};

export const addChildBarComponentStyle: Record<string, SxProps<Theme>> = {
    button: buttonStyle,
    container: containerStyle,
};
