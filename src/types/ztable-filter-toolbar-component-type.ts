import type { ElementType } from 'react';

import type { GridColType } from '@mui/x-data-grid';

export type FilterValues = Record<string, string>;

export type FilterColumnIconMap = Partial<Record<GridColType, ElementType>>;
