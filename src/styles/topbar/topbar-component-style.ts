import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
  alignItems: 'center',
  backgroundColor: 'primary.main',
  display: 'flex',
  height: 64,
  left: 0,
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
  width: 36,
  height: 36,
  fontWeight: 'bold',
  fontSize: '1rem',
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

const titleSectionStyle = {
  alignItems: 'center',
  display: 'flex',
  gap: 1,
  userSelect: 'none',
} as const satisfies SxProps<Theme>;

const titleTextStyle = {
  color: 'common.white',
  fontSize: '1.15rem',
  fontWeight: 700,
  letterSpacing: '0.5px',
  lineHeight: 1.2,
} as const satisfies SxProps<Theme>;

const titleSubtextStyle = {
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.65rem',
  fontWeight: 400,
  letterSpacing: '1.5px',
  lineHeight: 1,
} as const satisfies SxProps<Theme>;

const menuItemStyle = {
  py: 1.5,
} as const satisfies SxProps<Theme>;

const hamburgerButtonStyle = {
  mr: 1,
  p: 1,
} as const satisfies SxProps<Theme>;

const hamburgerIconButtonStyle = { color: 'common.white' } as const satisfies SxProps<Theme>;

export const topbarComponentStyle = {
  avatarStyle,
  containerStyle,
  hamburgerButtonStyle,
  hamburgerIconButtonStyle,
  iconButtonStyle,
  largeAvatarStyle,
  menuItemStyle,
  popoverStyle,
  popoverContentStyle,
  profileHeaderStyle,
  rightSectionStyle,
  titleSectionStyle,
  titleSubtextStyle,
  titleTextStyle,
  userEmailStyle,
  userNameStyle,
} satisfies Record<string, SxProps<Theme>>;
