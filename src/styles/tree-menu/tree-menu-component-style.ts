import type { CSSProperties } from 'react';

const containerStyle = {
  borderRadius: 0,
  height: '100vh ',
  overflowY: 'auto',
  padding: '10px',
  position: 'fixed',
  top: '64px',
  width: '350px',
  zIndex: 999,
  overflowX: 'hidden',
} as const satisfies CSSProperties;

const subContainerStyle = {
  padding: 16,
  display: 'flex',
  justifyContent: 'center',
} as const satisfies CSSProperties;

export const treeMenuComponentStyle = {
  containerStyle,
  subContainerStyle,
} satisfies Record<string, CSSProperties>;
