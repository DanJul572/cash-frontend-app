import React from 'react';

import { Box, Divider, Paper, Typography } from '@mui/material';

import LayersIcon from '@mui/icons-material/Layers';

import { useBuilderState } from '../hooks/useBuilderState';
import type { SchemaNode } from '../types/schema';
import { ComponentPalette } from './ComponentPalette';
import { JsonPreview } from './JsonPreview';
import { PropertiesPanel } from './PropertiesPanel';
import { TreeNode } from './TreeNode';

const panelSx = {
    p: 2,
    borderRadius: 3,
    border: '0.5px solid',
    borderColor: 'divider',
    bgcolor: 'background.paper',
    boxShadow: 'none',
};

export const ContentStructureBuilder: React.FC = () => {
    const {
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
    } = useBuilderState();

    return (
        <Box sx={{ p: 3 }}>
            <Box>
                <LayersIcon color="primary" />
                <Typography variant="h6">Content Structure Builder</Typography>
            </Box>

            <Box>
                {/* Left: palette */}
                <Paper sx={{ ...panelSx, width: 190, flexShrink: 0 }}>
                    <ComponentPalette onAdd={addToRoot} />
                </Paper>

                {/* Middle: tree */}
                <Paper sx={{ ...panelSx, flex: 1, minWidth: 0, maxHeight: 560, overflowY: 'auto' }}>
                    <Typography
                        variant="overline"
                        color="text.secondary"
                        sx={{ fontSize: 11, letterSpacing: '0.08em', display: 'block', mb: 1.5 }}
                    >
                        Struktur
                    </Typography>

                    {nodes.length === 0 ? (
                        <Box sx={{ textAlign: 'center', py: 5 }}>
                            <LayersIcon sx={{ fontSize: 36, color: 'text.disabled', mb: 1 }} />
                            <Typography variant="body2" color="text.disabled">
                                Belum ada komponen.
                                <br />
                                Tambah dari panel kiri.
                            </Typography>
                        </Box>
                    ) : (
                        nodes.map((node) => (
                            <TreeNode
                                key={node.id}
                                node={node}
                                selectedId={selectedId}
                                onSelect={toggleSelect}
                                onDelete={deleteNode}
                                onAddChild={addChild}
                                onAddRow={addRow}
                                onDeleteRow={deleteRow}
                            />
                        ))
                    )}
                </Paper>

                {/* Right: properties + json */}
                <Paper
                    sx={{
                        ...panelSx,
                        width: 240,
                        flexShrink: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                    }}
                >
                    <PropertiesPanel
                        node={selectedNode}
                        onChange={(id, updates) => updateNode(id, updates as Partial<SchemaNode>)}
                    />
                    <Divider sx={{ my: 2 }} />
                    <JsonPreview nodes={nodes} />
                </Paper>
            </Box>
        </Box>
    );
};
