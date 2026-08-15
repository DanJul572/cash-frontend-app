import type { GridLogicOperator } from '@mui/x-data-grid';

export interface FilterCondition {
  id: string;
  field: string;
  operator: string;
  value: string | number | null;
}

export type { GridLogicOperator };

export const STRING_OPERATORS = [
  'contains',
  'doesNotContain',
  'equals',
  'doesNotEqual',
  'startsWith',
  'endsWith',
] as const;

export const NUMBER_OPERATORS = ['=', '!=', '>', '>=', '<', '<='] as const;

export const OPERATOR_LABELS: Record<string, string> = {
  contains: 'Contains',
  doesNotContain: 'Does not contain',
  equals: 'Equals',
  doesNotEqual: 'Does not equal',
  startsWith: 'Starts with',
  endsWith: 'Ends with',
  '=': '=',
  '!=': '!=',
  '>': '>',
  '>=': '>=',
  '<': '<',
  '<=': '<=',
};
