import type { SxProps, Theme } from '@mui/material';

const containerBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    px: 1,
    py: 0.625,
    borderRadius: 1,
    border: '0.5px solid',
    cursor: 'pointer',
    mb: 0.375,
    transition: 'all 0.1s',
    '&:hover .node-delete': { opacity: 1 },
} as const satisfies SxProps<Theme>;

const chipStyle = {
    fontSize: 11,
    height: 20,
    '& .MuiChip-icon': { ml: '6px' },
} as const satisfies SxProps<Theme>;

const labelStyle = {
    flex: 1,
    fontSize: 13,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
} as const satisfies SxProps<Theme>;

const deleteButtonStyle = {
    opacity: 0,
    transition: 'opacity 0.1s',
    color: 'error.main',
    p: 0.25,
} as const satisfies SxProps<Theme>;

const deleteButtonIconStyle = { fontSize: 14 } as const satisfies SxProps<Theme>;

const metaIconStyle = { fontSize: 14 } as const satisfies SxProps<Theme>;

export const nodeRowStyle = {
    chipStyle,
    containerBaseStyle,
    deleteButtonIconStyle,
    deleteButtonStyle,
    labelStyle,
    metaIconStyle,
} satisfies Record<string, SxProps<Theme>>;
