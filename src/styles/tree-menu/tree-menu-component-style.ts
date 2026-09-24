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
  transition: 'width 0.3s ease-in-out',
  overflowX: 'hidden',
} as const satisfies CSSProperties;

const subContainerStyle = {
  padding: 16,
  display: 'flex',
  justifyContent: 'center',
} as const satisfies CSSProperties;

const collapsedContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 8,
} as const satisfies CSSProperties;

export const treeMenuComponentStyle = {
  containerStyle,
  subContainerStyle,
  collapsedContainerStyle,
} satisfies Record<string, CSSProperties>;
