import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.5,
    alignItems: 'center',
    mt: 0.5,
};

const buttonStyle = {
    fontSize: 11,
    minWidth: 0,
    px: 1,
    py: 0.25,
    textTransform: 'none',
    color: 'primary.main',
    '&:hover': { bgcolor: 'primary.50' },
};

const addIconStyle = { fontSize: 14, color: 'text.disabled' };

export const addChildBarComponentStyle = {
    addIconStyle,
    buttonStyle,
    containerStyle,
} satisfies Record<string, SxProps<Theme>>;
