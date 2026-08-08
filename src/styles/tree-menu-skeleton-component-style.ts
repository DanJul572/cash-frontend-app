import type { CSSProperties } from 'react';

const expandedCardStyle = {
  borderRadius: 0,
  height: '100vh',
  overflowY: 'auto',
  padding: '10px',
  position: 'fixed',
  top: '64px',
  width: '350px',
  zIndex: 999,
  transition: 'width 0.3s ease-in-out',
  overflowX: 'hidden',
} as const satisfies CSSProperties;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 12,
} as const satisfies CSSProperties;

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 5,
} as const satisfies CSSProperties;

const iconStyle = {
  width: 20,
  height: 20,
  borderRadius: 4,
} as const satisfies CSSProperties;

const textStyle = {
  height: 20,
  borderRadius: 4,
  flex: 1,
} as const satisfies CSSProperties;

export const treeMenuSkeletonComponentStyle = {
  expandedCardStyle,
  containerStyle,
  itemStyle,
  iconStyle,
  textStyle,
} satisfies Record<string, CSSProperties>;
