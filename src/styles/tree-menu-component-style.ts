import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    borderRadius: 0,
    height: '100vh ',
    overflowY: 'auto',
    padding: '10px',
    position: 'fixed',
    top: '64px',
    width: '350px',
    zIndex: 999,
};

export const treeMenuComponentStyle = {
    container: containerStyle,
};
