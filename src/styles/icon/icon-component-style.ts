import type { SxProps, Theme } from '@mui/material';

import type { IconComponentFontSizeType } from '@type-defs/icon/icon-component-props-type';

// Same sizing as MUI SvgIcon so Iconify icons line up with the rest of the UI.
const iconStyle = {
  display: 'inline-block',
  flexShrink: 0,
  userSelect: 'none',
} as const satisfies SxProps<Theme>;

const fontSizeStyle = {
  inherit: { fontSize: 'inherit' },
  small: { fontSize: (theme) => theme.typography.pxToRem(20) },
  medium: { fontSize: (theme) => theme.typography.pxToRem(24) },
  large: { fontSize: (theme) => theme.typography.pxToRem(35) },
} as const satisfies Record<IconComponentFontSizeType, SxProps<Theme>>;

export const iconComponentStyle = {
  iconStyle,
  fontSizeStyle,
};
