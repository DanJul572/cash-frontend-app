import type { ComponentType } from './component-type';

export type ComponentPaletteComponentPropsType = {
    onAdd: (type: ComponentType) => void;
};
