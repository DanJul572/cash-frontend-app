import type { SxProps, Theme } from '@mui/material';

const dataGridStripedStyle = {
  '& .MuiDataGrid-row.odd': {
    backgroundColor: 'action.hover',
  },
} as const satisfies SxProps<Theme>;

export const ztableComponentStyle = {
  dataGridStripedStyle,
} satisfies Record<string, SxProps<Theme>>;
