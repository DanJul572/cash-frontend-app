import type { BaseNodeType } from './base-node-type';

export interface ButtonNodeType extends BaseNodeType {
    type: 'button';
    variant: 'contained' | 'outlined' | 'text';
    color: 'primary' | 'secondary' | 'error' | 'inherit';
    onClick: string;
}
