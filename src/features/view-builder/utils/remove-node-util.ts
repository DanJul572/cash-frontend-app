import type { SchemaNodeType } from '../types';

export function removeNodeUtil(id: string, list: SchemaNodeType[]): SchemaNodeType[] {
    return list
        .filter((n) => n.id !== id)
        .map((n) => {
            if (n.type === 'card') return { ...n, children: removeNodeUtil(id, n.children) };
            if (n.type === 'grid')
                return {
                    ...n,
                    rows: n.rows.map((row) => ({ columns: removeNodeUtil(id, row.columns) })),
                };
            return n;
        });
}
