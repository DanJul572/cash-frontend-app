import type { CSSProperties } from '@mui/material';

const modalRootStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  paddingTop: 1,
} as const satisfies CSSProperties;

const sectionHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 1,
} as const satisfies CSSProperties;

const sectionDescriptionStyle = {
  display: 'block',
  color: 'text.secondary',
} as const satisfies CSSProperties;

const filterListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  paddingTop: 1,
} as const satisfies CSSProperties;

const dialogActionsStyle = {
  paddingX: 3,
  paddingBottom: 2.5,
} as const satisfies CSSProperties;

export const ztableFilterToolbarComponentStyle = {
  modalRootStyle,
  sectionHeaderStyle,
  sectionDescriptionStyle,
  filterListStyle,
  dialogActionsStyle,
} satisfies Record<string, CSSProperties>;
