import type { CSSProperties } from 'react';

import { LAYOUT_HEADER_HEIGHT_CONSTANT } from '@constants';

const containerStyle = {
  alignItems: 'center',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  gap: 6,
  height: LAYOUT_HEADER_HEIGHT_CONSTANT,
  justifyContent: 'center',
  userSelect: 'none',
} as const satisfies CSSProperties;

const logoStyle = {
  display: 'block',
  maxHeight: 40,
  maxWidth: '80%',
  objectFit: 'contain',
} as const satisfies CSSProperties;

const versionStyle = {
  fontSize: '0.65rem',
  letterSpacing: '1.5px',
  lineHeight: 1,
} as const satisfies CSSProperties;

export const treeMenuHeaderComponentStyle = {
  containerStyle,
  logoStyle,
  versionStyle,
} satisfies Record<string, CSSProperties>;
