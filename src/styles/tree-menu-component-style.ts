import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    borderRadius: 0,
    height: '100vh ',
    overflowY: 'auto',
    padding: '10px',
    position: 'fixed',
    top: '64px',
    width: '350px',
    zIndex: 999,
    transition: 'width 0.3s ease-in-out',
    overflowX: 'hidden',
} as const satisfies SxProps<Theme>;

const collapsedContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pt: 1,
} as const satisfies SxProps<Theme>;

export const treeMenuComponentStyle = {
    containerStyle,
    collapsedContainerStyle,
} satisfies Record<string, SxProps<Theme>>;
