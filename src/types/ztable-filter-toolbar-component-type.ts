import type { GridLogicOperator } from '@mui/x-data-grid';

export interface FilterCondition {
  id: string;
  field: string;
  value: string | number | null;
}

export type { GridLogicOperator };
