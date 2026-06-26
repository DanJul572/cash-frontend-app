import type { ButtonNodeType } from './button-node-type';
import type { CardNodeType } from './card-node-type';
import type { GridNodeType } from './grid-node-type';
import type { InputNodeType } from './input-node-type';

export type SchemaNodeType = CardNodeType | GridNodeType | ButtonNodeType | InputNodeType;
