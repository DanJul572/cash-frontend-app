import type { ComponentType } from './component-type';

export type AddChildBarComponentPropsType = {
    onAdd: (type: ComponentType) => void;
};
