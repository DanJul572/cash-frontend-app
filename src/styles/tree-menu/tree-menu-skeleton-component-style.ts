import type { CSSProperties } from 'react';

const cardStyle = {
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
  cardStyle,
  contentStyle,
  containerStyle,
  itemStyle,
  iconStyle,
  textStyle,
} satisfies Record<string, CSSProperties>;
