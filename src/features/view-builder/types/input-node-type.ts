import type { BaseNodeType } from './base-node-type';

export interface InputNodeType extends BaseNodeType {
    type: 'input';
    inputType: 'text' | 'number' | 'email' | 'password';
    placeholder: string;
    onChange: string;
}
