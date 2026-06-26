import type { SchemaNodeType } from '../types';

export function findNodeUtil(id: string, list: SchemaNodeType[]): SchemaNodeType | null {
    for (const n of list) {
        if (n.id === id) return n;
        if (n.type === 'card') {
            const found = findNodeUtil(id, n.children);
            if (found) return found;
        }
        if (n.type === 'grid') {
            for (const row of n.rows) {
                const found = findNodeUtil(id, row.columns);
                if (found) return found;
            }
        }
    }
    return null;
}
