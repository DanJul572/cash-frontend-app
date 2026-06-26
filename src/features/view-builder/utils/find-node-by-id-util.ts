import type { SchemaNodeType } from '../types';

export function findNodeByIdUtil(nodes: SchemaNodeType[], id: string): SchemaNodeType | null {
    for (const node of nodes) {
        if (node.id === id) return node;

        if (node.type === 'card') {
            const found = findNodeByIdUtil(node.children, id);
            if (found) return found;
        }

        if (node.type === 'grid') {
            for (const row of node.rows) {
                const found = findNodeByIdUtil(row.columns, id);
                if (found) return found;
            }
        }
    }
    return null;
}
