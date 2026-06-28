import { useState, useCallback } from 'react';

import type { ComponentType, SchemaNodeType } from '../types';
import {
    addChildToNodeUtil,
    addRowToGridUtil,
    collectIdsUtil,
    deleteRowFromGridUtil,
    findNodeByIdUtil,
    makeNodeUtil,
    removeNodeUtil,
    updateNodeInListUtil,
} from '../utils';

export default function useViewBuilderPageHook() {
    const [nodes, setNodes] = useState<SchemaNodeType[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedNode = selectedId ? findNodeByIdUtil(nodes, selectedId) : null;

    const addToRoot = useCallback((type: ComponentType) => {
        setNodes((prev) => [...prev, makeNodeUtil(type)]);
    }, []);

    const addChild = useCallback((parentId: string, type: ComponentType) => {
        const child = makeNodeUtil(type);
        setNodes((prev) => addChildToNodeUtil(parentId, child, prev));
        setSelectedId(child.id);
    }, []);

    const addRow = useCallback((parentId: string) => {
        setNodes((prev) => addRowToGridUtil(parentId, prev));
    }, []);

    const deleteRow = useCallback(
        (parentId: string, rowIndex: number) => {
            setNodes((prev) => {
                const next = deleteRowFromGridUtil(parentId, rowIndex, prev);
                // If selected node was inside deleted row, clear selection
                const remainingIds = collectIdsUtil(next);
                if (selectedId && !remainingIds.includes(selectedId)) setSelectedId(null);
                return next;
            });
        },
        [selectedId],
    );

    const deleteNode = useCallback((id: string) => {
        setNodes((prev) => removeNodeUtil(id, prev));
        setSelectedId((prev) => (prev === id ? null : prev));
    }, []);

    const updateNode = useCallback((id: string, updates: Partial<SchemaNodeType>) => {
        setNodes((prev) => updateNodeInListUtil(id, updates, prev));
    }, []);

    const toggleSelect = useCallback((id: string) => {
        setSelectedId((prev) => (prev === id ? null : id));
    }, []);

    return {
        nodes,
        selectedId,
        selectedNode,
        addToRoot,
        addChild,
        addRow,
        deleteRow,
        deleteNode,
        updateNode,
        toggleSelect,
    };
}
