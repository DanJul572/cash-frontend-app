import type { SchemaNodeType } from '../types';

export function addChildToNodeUtil(
    parentId: string,
    child: SchemaNodeType,
    list: SchemaNodeType[],
): SchemaNodeType[] {
    return list.map((n) => {
        if (n.id === parentId) {
            if (n.type === 'card') return { ...n, children: [...n.children, child] };
            if (n.type === 'grid') {
                const rows = [...n.rows];
                if (!rows.length) rows.push({ columns: [] });
                const last = rows[rows.length - 1];
                if (last.columns.length < 12) {
                    rows[rows.length - 1] = { columns: [...last.columns, child] };
                } else {
                    rows.push({ columns: [child] });
                }
                return { ...n, rows };
            }
        }
        if (n.type === 'card')
            return { ...n, children: addChildToNodeUtil(parentId, child, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({
                    columns: addChildToNodeUtil(parentId, child, row.columns),
                })),
            };
        return n;
    });
}
