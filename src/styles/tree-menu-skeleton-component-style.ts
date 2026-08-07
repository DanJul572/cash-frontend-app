import type { CSSProperties } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 12,
} as const satisfies CSSProperties;

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
} as const satisfies CSSProperties;

const iconStyle = {
  width: 24,
  height: 24,
  borderRadius: 4,
} as const satisfies CSSProperties;

const textStyle = {
  height: 24,
  borderRadius: 4,
  flex: 1,
} as const satisfies CSSProperties;

export const treeMenuSkeletonComponentStyle = {
  containerStyle,
  itemStyle,
  iconStyle,
  textStyle,
} satisfies Record<string, CSSProperties>;
