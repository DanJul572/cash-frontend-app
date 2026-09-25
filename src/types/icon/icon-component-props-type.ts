import type { SxProps, Theme } from '@mui/material';

export type IconComponentFontSizeType = 'inherit' | 'small' | 'medium' | 'large';

export type IconComponentPropsType = {
  /** Iconify icon name, e.g. `ic:baseline-dashboard`. Nothing is rendered when empty. */
  icon?: string | null;
  fontSize?: IconComponentFontSizeType;
  className?: string;
  sx?: SxProps<Theme>;
};
