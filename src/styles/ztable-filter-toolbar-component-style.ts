import type { CSSProperties } from '@mui/material';

const filterRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
} as const satisfies CSSProperties;

const filterSelectStyle = {
  minWidth: 140,
} as const satisfies CSSProperties;

const filterValueStyle = {
  flex: 1,
  minWidth: 120,
} as const satisfies CSSProperties;

export const ztableFilterToolbarComponentStyle = {
  filterRowStyle,
  filterSelectStyle,
  filterValueStyle,
} satisfies Record<string, CSSProperties>;
