import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';

import type { SchemaNodeType, ComponentType } from '../types';
import { NodeRow } from './NodeRow';
import AddChildBarComponent from './add-child-bar-component';

interface Props {
    node: SchemaNodeType;
    selectedId: string | null;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;
    onAddChild: (parentId: string, type: ComponentType) => void;
    onAddRow: (parentId: string) => void;
    onDeleteRow: (parentId: string, rowIndex: number) => void;
}

export const TreeNode: React.FC<Props> = ({
    node,
    selectedId,
    onSelect,
    onDelete,
    onAddChild,
    onAddRow,
    onDeleteRow,
}) => {
    const canHaveChildren = node.type === 'card' || node.type === 'grid';

    const renderChildren = () => {
        if (node.type === 'card') {
            return (
                <>
                    {node.children.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            selectedId={selectedId}
                            onSelect={onSelect}
                            onDelete={onDelete}
                            onAddChild={onAddChild}
                            onAddRow={onAddRow}
                            onDeleteRow={onDeleteRow}
                        />
                    ))}
                    <AddChildBarComponent onAdd={(type) => onAddChild(node.id, type)} />
                </>
            );
        }

        if (node.type === 'grid') {
            return (
                <>
                    {node.rows.map((row, rowIndex) => (
                        <Box
                            key={rowIndex}
                            sx={{
                                border: '1px dashed',
                                borderColor: 'divider',
                                borderRadius: 1,
                                p: 0.75,
                                mb: 0.75,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    mb: 0.5,
                                }}
                            >
                                <Typography variant="caption" color="text.disabled">
                                    Row {rowIndex + 1} &nbsp;({row.columns.length}/12 cols)
                                </Typography>
                                <Tooltip title="Hapus row ini">
                                    <IconButton
                                        size="small"
                                        color="error"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onDeleteRow(node.id, rowIndex);
                                        }}
                                        sx={{ p: 0.25 }}
                                    >
                                        <Delete sx={{ fontSize: 14 }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                            {row.columns.length === 0 && (
                                <Typography
                                    variant="caption"
                                    color="text.disabled"
                                    sx={{ display: 'block', py: 0.5 }}
                                >
                                    — kosong —
                                </Typography>
                            )}

                            {row.columns.map((col) => (
                                <TreeNode
                                    key={col.id}
                                    node={col}
                                    selectedId={selectedId}
                                    onSelect={onSelect}
                                    onDelete={onDelete}
                                    onAddChild={onAddChild}
                                    onAddRow={onAddRow}
                                    onDeleteRow={onDeleteRow}
                                />
                            ))}

                            <AddChildBarComponent onAdd={(type) => onAddChild(node.id, type)} />
                        </Box>
                    ))}

                    <Button
                        size="small"
                        startIcon={<AddIcon />}
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddRow(node.id);
                        }}
                        sx={{ fontSize: 12, textTransform: 'none', color: 'primary.main', mt: 0.5 }}
                    >
                        row baru
                    </Button>
                </>
            );
        }

        return null;
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <NodeRow
                node={node}
                selected={selectedId === node.id}
                onSelect={() => onSelect(node.id)}
                onDelete={() => onDelete(node.id)}
            />
            {canHaveChildren && (
                <Box
                    sx={{
                        ml: 2.5,
                        borderLeft: '1px dashed',
                        borderColor: 'divider',
                        pl: 1,
                    }}
                >
                    {renderChildren()}
                </Box>
            )}
        </Box>
    );
};
