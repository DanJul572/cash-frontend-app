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

const sectionLabelStyle = {
  display: 'block',
  fontWeight: 600,
  color: 'text.secondary',
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

export const ztableFilterToolbarComponentStyle = {
  modalRootStyle,
  sectionHeaderStyle,
  sectionLabelStyle,
  sectionDescriptionStyle,
  filterListStyle,
} satisfies Record<string, CSSProperties>;
