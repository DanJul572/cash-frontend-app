import type { SchemaNodeType } from '../types';

export function collectIdsUtil(nodes: SchemaNodeType[]): string[] {
    const ids: string[] = [];
    for (const n of nodes) {
        ids.push(n.id);
        if (n.type === 'card') ids.push(...collectIdsUtil(n.children));
        if (n.type === 'grid') n.rows.forEach((row) => ids.push(...collectIdsUtil(row.columns)));
    }
    return ids;
}
