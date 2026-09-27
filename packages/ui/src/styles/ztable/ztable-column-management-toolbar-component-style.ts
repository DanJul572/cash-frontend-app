import type { CSSProperties } from '@mui/material';

const columnItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
} as const satisfies CSSProperties;

export const ztableColumnManagementToolbarComponentStyle = {
  columnItemStyle,
} satisfies Record<string, CSSProperties>;
