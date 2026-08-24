import type { SxProps, Theme } from '@mui/material';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 2,
  gap: 2,
  cursor: 'pointer',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: 4,
  },
} as const satisfies SxProps<Theme>;

const cardCurrentUserStyle = {
  border: 2,
  borderColor: 'primary.main',
} as const satisfies SxProps<Theme>;

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
} as const satisfies SxProps<Theme>;

const avatarStyle = {
  width: 80,
  height: 80,
  fontSize: '1.5rem',
  bgcolor: 'primary.main',
} as const satisfies SxProps<Theme>;

const buttonStyle = {
  textTransform: 'none',
} as const satisfies SxProps<Theme>;

export const userCardComponentStyle = {
  cardStyle,
  cardCurrentUserStyle,
  cardContentStyle,
  avatarStyle,
  buttonStyle,
} satisfies Record<string, SxProps<Theme>>;
