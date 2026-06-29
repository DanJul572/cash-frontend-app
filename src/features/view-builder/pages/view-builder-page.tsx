import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import LayersIcon from '@mui/icons-material/Layers';

import {
    ComponentPaletteComponent,
    JsonPreviewComponent,
    PropertiesPanel,
    TreeNode,
} from '../components';
import { useViewBuilderPageHook } from '../hooks';
import { viewBuilderPageStyle } from '../styles';
import type { SchemaNodeType } from '../types';

export default function ViewBuilderPage() {
    const { t } = useTranslation('viewBuilder');

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
    } = useViewBuilderPageHook();

    return (
        <Box sx={viewBuilderPageStyle.containerStyle}>
            <Box sx={viewBuilderPageStyle.titleContainerStyle}>
                <LayersIcon color="primary" />
                <Typography variant="h6">Content Structure Builder</Typography>
            </Box>
            <Box sx={viewBuilderPageStyle.contentContainerStyle}>
                <Paper sx={viewBuilderPageStyle.leftContentContainerStyle}>
                    <ComponentPaletteComponent onAdd={addToRoot} />
                </Paper>
                <Paper sx={viewBuilderPageStyle.middleContentContainerStyle}>
                    <Typography
                        variant="overline"
                        color="text.secondary"
                        sx={viewBuilderPageStyle.middleTitleStyle}
                    >
                        {t('structure')}
                    </Typography>
                    {nodes.length === 0 ? (
                        <Box sx={viewBuilderPageStyle.emptyContentContainerStyle}>
                            <LayersIcon sx={viewBuilderPageStyle.emptyContentIconStyle} />
                            <Typography variant="body2" color="text.disabled">
                                {t('empty_content')}.
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
                <Paper sx={viewBuilderPageStyle.rightContentContainerStyle}>
                    <PropertiesPanel
                        node={selectedNode}
                        onChange={(id, updates) =>
                            updateNode(id, updates as Partial<SchemaNodeType>)
                        }
                    />
                    <Divider sx={viewBuilderPageStyle.rightContentDividerStyle} />
                    <JsonPreviewComponent nodes={nodes} />
                </Paper>
            </Box>
        </Box>
    );
}
