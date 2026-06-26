import type { SchemaNodeType } from '../types';

export function addRowToGridUtil(parentId: string, list: SchemaNodeType[]): SchemaNodeType[] {
    return list.map((n) => {
        if (n.id === parentId && n.type === 'grid') {
            return { ...n, rows: [...n.rows, { columns: [] }] };
        }
        if (n.type === 'card') return { ...n, children: addRowToGridUtil(parentId, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({ columns: addRowToGridUtil(parentId, row.columns) })),
            };
        return n;
    });
}
