import type { CSSProperties } from '@mui/material';

const searchFieldWrapperStyle = {
  paddingX: 1,
  paddingY: 1,
  borderBottom: 1,
  borderColor: 'divider',
} as const satisfies CSSProperties;

export const ztableSearchToolbarComponentStyle = {
  searchFieldWrapperStyle,
} satisfies Record<string, CSSProperties>;
