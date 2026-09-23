import type { CSSProperties } from '@mui/material';

const modalRootStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.5,
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

const filterGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: 1,
} as const satisfies CSSProperties;

const filterCardStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
  padding: 1.5,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 1.5,
  color: 'text.secondary',
  transition: 'border-color 150ms, background-color 150ms',
  '&:focus-within': {
    borderColor: 'primary.light',
  },
} as const satisfies CSSProperties;

const activeCardStyle = {
  borderColor: 'primary.main',
  backgroundColor: 'action.hover',
  color: 'primary.main',
} as const satisfies CSSProperties;

const filterIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 36,
  height: 36,
  borderRadius: 1,
  backgroundColor: 'action.selected',
} as const satisfies CSSProperties;

const filterFieldStyle = {
  flex: 1,
  minWidth: 0,
} as const satisfies CSSProperties;

const filterLabelStyle = {
  display: 'block',
  marginBottom: 0.5,
  fontWeight: 600,
} as const satisfies CSSProperties;

export const ztableFilterToolbarComponentStyle = {
  modalRootStyle,
  sectionHeaderStyle,
  sectionLabelStyle,
  sectionDescriptionStyle,
  filterGridStyle,
  filterCardStyle,
  activeCardStyle,
  filterIconStyle,
  filterFieldStyle,
  filterLabelStyle,
} satisfies Record<string, CSSProperties>;
