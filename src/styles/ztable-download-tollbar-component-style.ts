import type { CSSProperties } from '@mui/material';

const modalRootStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  paddingTop: 1,
} as const satisfies CSSProperties;

const sectionLabelStyle = {
  display: 'block',
  marginBottom: 1,
  fontWeight: 600,
  color: 'text.secondary',
} as const satisfies CSSProperties;

const fileTypeGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 1,
} as const satisfies CSSProperties;

const fileTypeCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 0.5,
  width: '100%',
  paddingTop: 1.5,
  paddingBottom: 1.5,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 1.5,
  color: 'text.secondary',
  transition: 'border-color 150ms, background-color 150ms',
} as const satisfies CSSProperties;

const dataTypeListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
} as const satisfies CSSProperties;

const dataTypeCardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 1.5,
  width: '100%',
  padding: 1.5,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 1.5,
  textAlign: 'left',
  color: 'text.secondary',
  transition: 'border-color 150ms, background-color 150ms',
} as const satisfies CSSProperties;

const dataTypeTextStyle = {
  flex: 1,
  minWidth: 0,
} as const satisfies CSSProperties;

const selectedCardStyle = {
  borderColor: 'primary.main',
  backgroundColor: 'action.hover',
  color: 'primary.main',
} as const satisfies CSSProperties;

export const ztableDownloadTollbarComponentStyle = {
  modalRootStyle,
  sectionLabelStyle,
  fileTypeGridStyle,
  fileTypeCardStyle,
  dataTypeListStyle,
  dataTypeCardStyle,
  dataTypeTextStyle,
  selectedCardStyle,
} satisfies Record<string, CSSProperties>;
