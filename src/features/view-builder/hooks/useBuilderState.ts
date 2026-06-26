import { useState, useCallback } from 'react';

import type { SchemaNode, ComponentType } from '../types/schema';
import {
    makeNode,
    removeNode,
    updateNodeInList,
    addChildToNode,
    addRowToGrid,
    deleteRowFromGrid,
    collectIds,
} from '../utils/nodeUtils';

export function useBuilderState() {
    const [nodes, setNodes] = useState<SchemaNode[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedNode = selectedId
        ? nodes.reduce<SchemaNode | null>((found, n) => {
              if (found) return found;
              const search = (list: SchemaNode[]): SchemaNode | null => {
                  for (const node of list) {
                      if (node.id === selectedId) return node;
                      if (node.type === 'card') {
                          const r = search(node.children);
                          if (r) return r;
                      }
                      if (node.type === 'grid') {
                          for (const row of node.rows) {
                              const r = search(row.columns);
                              if (r) return r;
                          }
                      }
                  }
                  return null;
              };
              return search([n]);
          }, null)
        : null;

    const addToRoot = useCallback((type: ComponentType) => {
        setNodes((prev) => [...prev, makeNode(type)]);
    }, []);

    const addChild = useCallback((parentId: string, type: ComponentType) => {
        const child = makeNode(type);
        setNodes((prev) => addChildToNode(parentId, child, prev));
        setSelectedId(child.id);
    }, []);

    const addRow = useCallback((parentId: string) => {
        setNodes((prev) => addRowToGrid(parentId, prev));
    }, []);

    const deleteRow = useCallback(
        (parentId: string, rowIndex: number) => {
            setNodes((prev) => {
                const next = deleteRowFromGrid(parentId, rowIndex, prev);
                // If selected node was inside deleted row, clear selection
                const remainingIds = collectIds(next);
                if (selectedId && !remainingIds.includes(selectedId)) setSelectedId(null);
                return next;
            });
        },
        [selectedId],
    );

    const deleteNode = useCallback((id: string) => {
        setNodes((prev) => removeNode(id, prev));
        setSelectedId((prev) => (prev === id ? null : prev));
    }, []);

    const updateNode = useCallback((id: string, updates: Partial<SchemaNode>) => {
        setNodes((prev) => updateNodeInList(id, updates, prev));
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
