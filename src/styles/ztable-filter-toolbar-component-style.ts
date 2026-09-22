import type { CSSProperties } from '@mui/material';

const dialogContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  pt: 1,
} as const satisfies CSSProperties;

const filterValueStyle = {
  flex: 1,
  minWidth: 0,
} as const satisfies CSSProperties;

export const ztableFilterToolbarComponentStyle = {
  dialogContentStyle,
  filterValueStyle,
} satisfies Record<string, CSSProperties>;
