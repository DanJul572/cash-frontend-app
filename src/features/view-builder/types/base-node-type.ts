import type { ComponentType } from './component-type';

export interface BaseNodeType {
    id: string;
    type: ComponentType;
    label: string;
}
