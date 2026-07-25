import type { SxProps, Theme } from '@mui/material';

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 2,
    gap: 2,
} as const satisfies SxProps<Theme>;

const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    width: '100%',
} as const satisfies SxProps<Theme>;

const avatarSkeletonStyle = {
    width: 80,
    height: 80,
} as const satisfies SxProps<Theme>;

const buttonSkeletonStyle = {
    width: '100%',
    height: 36,
    borderRadius: 1,
} as const satisfies SxProps<Theme>;

export const userCardSkeletonComponentStyle = {
    cardStyle,
    cardContentStyle,
    avatarSkeletonStyle,
    buttonSkeletonStyle,
} satisfies Record<string, SxProps<Theme>>;
