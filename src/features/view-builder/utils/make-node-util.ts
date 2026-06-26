import type {
    ButtonNodeType,
    CardNodeType,
    ComponentType,
    GridNodeType,
    InputNodeType,
    SchemaNodeType,
} from '../types';
import { uid } from './uid-util';

export function makeNodeUtil(type: ComponentType): SchemaNodeType {
    const id = uid();
    if (type === 'card') {
        return { id, type: 'card', label: 'Card', elevation: 1, children: [] } as CardNodeType;
    }
    if (type === 'grid') {
        return {
            id,
            type: 'grid',
            label: 'Grid',
            spacing: 2,
            rows: [{ columns: [] }],
        } as GridNodeType;
    }
    if (type === 'button') {
        return {
            id,
            type: 'button',
            label: 'Button',
            variant: 'contained',
            color: 'primary',
            onClick: 'handleClick',
        } as ButtonNodeType;
    }
    return {
        id,
        type: 'input',
        label: 'Input',
        inputType: 'text',
        placeholder: '',
        onChange: 'handleChange',
    } as InputNodeType;
}
