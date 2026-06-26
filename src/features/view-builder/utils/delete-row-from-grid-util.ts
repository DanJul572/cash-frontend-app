import type { SchemaNodeType } from '../types';

export function deleteRowFromGridUtil(
    parentId: string,
    rowIndex: number,
    list: SchemaNodeType[],
): SchemaNodeType[] {
    return list.map((n) => {
        if (n.id === parentId && n.type === 'grid') {
            const rows = n.rows.filter((_, i) => i !== rowIndex);
            return { ...n, rows: rows.length ? rows : [{ columns: [] }] };
        }
        if (n.type === 'card')
            return { ...n, children: deleteRowFromGridUtil(parentId, rowIndex, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({
                    columns: deleteRowFromGridUtil(parentId, rowIndex, row.columns),
                })),
            };
        return n;
    });
}
