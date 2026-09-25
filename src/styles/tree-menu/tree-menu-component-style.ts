import type { CSSProperties } from 'react';

const containerStyle = {
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  left: 0,
  position: 'fixed',
  top: 0,
  width: '350px',
  zIndex: 999,
} as const satisfies CSSProperties;

const contentStyle = {
  flex: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: '10px',
} as const satisfies CSSProperties;

const subContainerStyle = {
  padding: 16,
  display: 'flex',
  justifyContent: 'center',
} as const satisfies CSSProperties;

export const treeMenuComponentStyle = {
  containerStyle,
  contentStyle,
  subContainerStyle,
} satisfies Record<string, CSSProperties>;
