import type { SchemaNodeType } from '../types';

export function updateNodeInListUtil(
    id: string,
    updates: Partial<SchemaNodeType>,
    list: SchemaNodeType[],
): SchemaNodeType[] {
    return list.map((n) => {
        if (n.id === id) return { ...n, ...updates } as SchemaNodeType;
        if (n.type === 'card')
            return { ...n, children: updateNodeInListUtil(id, updates, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({
                    columns: updateNodeInListUtil(id, updates, row.columns),
                })),
            };
        return n;
    });
}
