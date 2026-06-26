export type ComponentType = 'card' | 'grid' | 'button' | 'input';

export interface BaseNode {
    id: string;
    type: ComponentType;
    label: string;
}

export interface CardNode extends BaseNode {
    type: 'card';
    elevation: number;
    children: SchemaNode[];
}

export interface GridRow {
    columns: SchemaNode[];
}

export interface GridNode extends BaseNode {
    type: 'grid';
    spacing: number;
    rows: GridRow[];
}

export interface ButtonNode extends BaseNode {
    type: 'button';
    variant: 'contained' | 'outlined' | 'text';
    color: 'primary' | 'secondary' | 'error' | 'inherit';
    onClick: string;
}

export interface InputNode extends BaseNode {
    type: 'input';
    inputType: 'text' | 'number' | 'email' | 'password';
    placeholder: string;
    onChange: string;
}

export type SchemaNode = CardNode | GridNode | ButtonNode | InputNode;
