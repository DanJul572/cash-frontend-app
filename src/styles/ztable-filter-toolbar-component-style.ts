import type { CSSProperties } from '@mui/material';

const dialogContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  pt: 1,
} as const satisfies CSSProperties;

const logicOperatorLabelStyle = {
  textAlign: 'center',
  color: 'text.secondary',
  typography: 'caption',
} as const satisfies CSSProperties;

const filterRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
} as const satisfies CSSProperties;

const filterRowContentStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  width: '100%',
} as const satisfies CSSProperties;

const filterSelectStyle = {
  flex: 1,
  minWidth: 0,
} as const satisfies CSSProperties;

const filterValueStyle = {
  flex: 1,
  minWidth: 0,
} as const satisfies CSSProperties;

export const ztableFilterToolbarComponentStyle = {
  dialogContentStyle,
  logicOperatorLabelStyle,
  filterRowStyle,
  filterRowContentStyle,
  filterSelectStyle,
  filterValueStyle,
} satisfies Record<string, CSSProperties>;
