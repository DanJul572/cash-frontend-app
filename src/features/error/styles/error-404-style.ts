import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
};

const codeStyle: SxProps<Theme> = {
    fontSize: { xs: '72px', md: '96px' },
    fontWeight: 500,
    letterSpacing: '-4px',
    color: 'text.primary',
    lineHeight: 1,
    mb: 1.5,
};

const dividerStyle: SxProps<Theme> = {
    width: 48,
    borderBottomWidth: 2,
    borderColor: 'primary.main',
    mb: 2.5,
};

const textStyle: SxProps<Theme> = {
    fontWeight: 500,
    color: 'text.secondary',
    letterSpacing: '0.5px',
};

export const error404Style = {
    code: codeStyle,
    container: containerStyle,
    divider: dividerStyle,
    text: textStyle,
};
