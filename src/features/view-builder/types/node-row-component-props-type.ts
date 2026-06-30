import type { SchemaNodeType } from './shema-node-type';

export type NodeRowComponentPropsType = {
    node: SchemaNodeType;
    selected: boolean;
    onSelect: () => void;
    onDelete: () => void;
};
