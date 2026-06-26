import type { BaseNodeType } from './base-node-type';
import type { SchemaNodeType } from './shema-node-type';

export interface CardNodeType extends BaseNodeType {
    type: 'card';
    elevation: number;
    children: SchemaNodeType[];
}
