import type { CSSProperties } from '@mui/material';

const titleStyle = {
  flex: 1,
  minWidth: 0,
  paddingLeft: 0.5,
  fontWeight: 600,
} as const satisfies CSSProperties;

export const ztableTitleToolbarComponentStyle = {
  titleStyle,
} satisfies Record<string, CSSProperties>;
