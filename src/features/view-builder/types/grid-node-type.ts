import type { BaseNodeType } from './base-node-type';
import type { GridRowType } from './grid-row-type';

export interface GridNodeType extends BaseNodeType {
    type: 'grid';
    spacing: number;
    rows: GridRowType[];
}
