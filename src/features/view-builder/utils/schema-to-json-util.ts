import type {
    ButtonNodeType,
    CardNodeType,
    GridNodeType,
    InputNodeType,
    SchemaNodeType,
} from '../types';

export function schematoJsonUtil(list: SchemaNodeType[]): unknown[] {
    return list.map((n) => {
        const out: Record<string, unknown> = { id: n.id, type: n.type };
        if (n.label) out.label = n.label;
        if (n.type === 'button') {
            const b = n as ButtonNodeType;
            out.variant = b.variant;
            out.color = b.color;
            out.onClick = b.onClick || null;
        }
        if (n.type === 'input') {
            const inp = n as InputNodeType;
            out.inputType = inp.inputType;
            if (inp.placeholder) out.placeholder = inp.placeholder;
            out.onChange = inp.onChange || null;
        }
        if (n.type === 'card') {
            const c = n as CardNodeType;
            out.elevation = c.elevation;
            out.children = schematoJsonUtil(c.children);
        }
        if (n.type === 'grid') {
            const g = n as GridNodeType;
            out.spacing = g.spacing;
            out.rows = g.rows.map((row) => ({ columns: schematoJsonUtil(row.columns) }));
        }
        return out;
    });
}
