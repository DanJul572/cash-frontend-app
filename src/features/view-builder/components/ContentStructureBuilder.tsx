import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import LayersIcon from '@mui/icons-material/Layers';

import { useBuilderStateHook } from '../hooks';
import type { SchemaNodeType } from '../types';
import { JsonPreview } from './JsonPreview';
import { PropertiesPanel } from './PropertiesPanel';
import { TreeNode } from './TreeNode';
import ComponentPaletteComponent from './component-palette-component';

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
    } = useBuilderStateHook();

    return (
        <Box sx={{ p: 3, height: '90vh', display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    paddingBottom: 1,
                    flexShrink: 0,
                }}
            >
                <LayersIcon color="primary" />
                <Typography variant="h6">Content Structure Builder</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, flex: 1, minHeight: 0 }}>
                {/* Left: palette — fixed height, no scroll */}
                <Paper sx={{ ...panelSx, flexShrink: 0, height: '100%', overflow: 'hidden' }}>
                    <ComponentPaletteComponent onAdd={addToRoot} />
                </Paper>

                {/* Middle: tree — scrolls when content overflows */}
                <Paper sx={{ ...panelSx, flex: 1, minWidth: 0, height: '100%', overflowY: 'auto' }}>
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

                {/* Right: properties + json — fixed height, no scroll */}
                <Paper
                    sx={{
                        ...panelSx,
                        width: 240,
                        flexShrink: 0,
                        height: '100%',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                    }}
                >
                    <PropertiesPanel
                        node={selectedNode}
                        onChange={(id, updates) =>
                            updateNode(id, updates as Partial<SchemaNodeType>)
                        }
                    />
                    <Divider sx={{ my: 2 }} />
                    <JsonPreview nodes={nodes} />
                </Paper>
            </Box>
        </Box>
    );
};
