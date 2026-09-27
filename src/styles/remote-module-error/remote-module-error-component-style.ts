import type { CSSProperties } from 'react';

const containerStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  justifyContent: 'center',
  minHeight: '100vh',
  padding: 24,
  textAlign: 'center',
} as const satisfies CSSProperties;

export const remoteModuleErrorComponentStyle = {
  containerStyle,
} satisfies Record<string, CSSProperties>;
