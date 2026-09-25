import type { SxProps, Theme } from '@mui/material';

import { LAYOUT_HEADER_HEIGHT_CONSTANT } from '@constants';

const containerStyle = {
  alignItems: 'center',
  backgroundColor: 'primary.main',
  display: 'flex',
  height: LAYOUT_HEADER_HEIGHT_CONSTANT,
  left: '350px',
  padding: '0 16px',
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 999,
} as const satisfies SxProps<Theme>;

const rightSectionStyle = {
  alignItems: 'center',
  display: 'flex',
  marginLeft: 'auto',
} as const satisfies SxProps<Theme>;

const iconButtonStyle = {
  p: 0,
} as const satisfies SxProps<Theme>;

const avatarStyle = {
  backgroundColor: 'common.white',
  color: 'primary.main',
  width: 48,
  height: 48,
  fontWeight: 'bold',
  fontSize: '1.25rem',
} as const satisfies SxProps<Theme>;

const popoverStyle = {
  mt: 1.5,
  '& .MuiPopover-paper': {
    overflow: 'hidden',
    width: 280,
  },
} as const satisfies SxProps<Theme>;

const popoverContentStyle = {
  width: '100%',
} as const satisfies SxProps<Theme>;

const profileHeaderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  py: 3,
  px: 2,
} as const satisfies SxProps<Theme>;

const largeAvatarStyle = {
  backgroundColor: 'primary.main',
  color: 'common.white',
  width: 72,
  height: 72,
  fontSize: '2rem',
  mb: 1.5,
} as const satisfies SxProps<Theme>;

const userNameStyle = {
  fontWeight: 'bold',
  mb: 0.5,
} as const satisfies SxProps<Theme>;

const userEmailStyle = {
  color: 'text.secondary',
} as const satisfies SxProps<Theme>;

const menuItemStyle = {
  py: 1.5,
} as const satisfies SxProps<Theme>;

export const topbarComponentStyle = {
  avatarStyle,
  containerStyle,
  iconButtonStyle,
  largeAvatarStyle,
  menuItemStyle,
  popoverStyle,
  popoverContentStyle,
  profileHeaderStyle,
  rightSectionStyle,
  userEmailStyle,
  userNameStyle,
} satisfies Record<string, SxProps<Theme>>;
