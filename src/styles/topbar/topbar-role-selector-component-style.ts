import type { SxProps, Theme } from '@mui/material';

const buttonStyle = {
  color: 'common.white',
  mr: 2,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
} as const satisfies SxProps<Theme>;

const menuStyle = {
  mt: 1,
  '& .MuiPaper-root': {
    minWidth: 220,
  },
} as const satisfies SxProps<Theme>;

const menuHeaderStyle = {
  color: 'text.secondary',
  display: 'block',
  px: 2,
  py: 1,
} as const satisfies SxProps<Theme>;

const menuItemStyle = {
  py: 1.25,
} as const satisfies SxProps<Theme>;

const checkIconStyle = {
  color: 'primary.main',
} as const satisfies SxProps<Theme>;

export const topbarRoleSelectorComponentStyle = {
  buttonStyle,
  checkIconStyle,
  menuHeaderStyle,
  menuItemStyle,
  menuStyle,
} satisfies Record<string, SxProps<Theme>>;
