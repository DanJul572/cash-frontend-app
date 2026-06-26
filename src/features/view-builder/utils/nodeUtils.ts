import type {
    SchemaNode,
    ComponentType,
    CardNode,
    GridNode,
    ButtonNode,
    InputNode,
} from '../types/schema';

let counter = 1;
export const uid = () => `n${counter++}`;

export function makeNode(type: ComponentType): SchemaNode {
    const id = uid();
    if (type === 'card') {
        return { id, type: 'card', label: 'Card', elevation: 1, children: [] } as CardNode;
    }
    if (type === 'grid') {
        return { id, type: 'grid', label: 'Grid', spacing: 2, rows: [{ columns: [] }] } as GridNode;
    }
    if (type === 'button') {
        return {
            id,
            type: 'button',
            label: 'Button',
            variant: 'contained',
            color: 'primary',
            onClick: 'handleClick',
        } as ButtonNode;
    }
    return {
        id,
        type: 'input',
        label: 'Input',
        inputType: 'text',
        placeholder: '',
        onChange: 'handleChange',
    } as InputNode;
}

export function findNode(id: string, list: SchemaNode[]): SchemaNode | null {
    for (const n of list) {
        if (n.id === id) return n;
        if (n.type === 'card') {
            const found = findNode(id, n.children);
            if (found) return found;
        }
        if (n.type === 'grid') {
            for (const row of n.rows) {
                const found = findNode(id, row.columns);
                if (found) return found;
            }
        }
    }
    return null;
}

export function removeNode(id: string, list: SchemaNode[]): SchemaNode[] {
    return list
        .filter((n) => n.id !== id)
        .map((n) => {
            if (n.type === 'card') return { ...n, children: removeNode(id, n.children) };
            if (n.type === 'grid')
                return {
                    ...n,
                    rows: n.rows.map((row) => ({ columns: removeNode(id, row.columns) })),
                };
            return n;
        });
}

export function updateNodeInList(
    id: string,
    updates: Partial<SchemaNode>,
    list: SchemaNode[],
): SchemaNode[] {
    return list.map((n) => {
        if (n.id === id) return { ...n, ...updates } as SchemaNode;
        if (n.type === 'card') return { ...n, children: updateNodeInList(id, updates, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({
                    columns: updateNodeInList(id, updates, row.columns),
                })),
            };
        return n;
    });
}

export function addChildToNode(
    parentId: string,
    child: SchemaNode,
    list: SchemaNode[],
): SchemaNode[] {
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
            return { ...n, children: addChildToNode(parentId, child, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({
                    columns: addChildToNode(parentId, child, row.columns),
                })),
            };
        return n;
    });
}

export function addRowToGrid(parentId: string, list: SchemaNode[]): SchemaNode[] {
    return list.map((n) => {
        if (n.id === parentId && n.type === 'grid') {
            return { ...n, rows: [...n.rows, { columns: [] }] };
        }
        if (n.type === 'card') return { ...n, children: addRowToGrid(parentId, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({ columns: addRowToGrid(parentId, row.columns) })),
            };
        return n;
    });
}

export function deleteRowFromGrid(
    parentId: string,
    rowIndex: number,
    list: SchemaNode[],
): SchemaNode[] {
    return list.map((n) => {
        if (n.id === parentId && n.type === 'grid') {
            const rows = n.rows.filter((_, i) => i !== rowIndex);
            return { ...n, rows: rows.length ? rows : [{ columns: [] }] };
        }
        if (n.type === 'card')
            return { ...n, children: deleteRowFromGrid(parentId, rowIndex, n.children) };
        if (n.type === 'grid')
            return {
                ...n,
                rows: n.rows.map((row) => ({
                    columns: deleteRowFromGrid(parentId, rowIndex, row.columns),
                })),
            };
        return n;
    });
}

export function collectIds(nodes: SchemaNode[]): string[] {
    const ids: string[] = [];
    for (const n of nodes) {
        ids.push(n.id);
        if (n.type === 'card') ids.push(...collectIds(n.children));
        if (n.type === 'grid') n.rows.forEach((row) => ids.push(...collectIds(row.columns)));
    }
    return ids;
}
