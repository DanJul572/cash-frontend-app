import type { CSSProperties } from '@mui/material';

const modalRootStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  paddingTop: 1,
} as const satisfies CSSProperties;

export const ztableDownloadTollbarComponentStyle = {
  modalRootStyle,
} satisfies Record<string, CSSProperties>;
