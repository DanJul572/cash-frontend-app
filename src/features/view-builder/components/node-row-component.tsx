import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import GridViewIcon from '@mui/icons-material/GridView';
import InputIcon from '@mui/icons-material/Input';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

import { nodeRowStyle } from '../styles';
import type { MetaConstantType, NodeRowComponentPropsType } from '../types';

const TYPE_META: MetaConstantType = {
    card: { color: 'secondary', icon: <DashboardIcon sx={nodeRowStyle.metaIconStyle} /> },
    grid: { color: 'success', icon: <GridViewIcon sx={nodeRowStyle.metaIconStyle} /> },
    button: { color: 'warning', icon: <SmartButtonIcon sx={nodeRowStyle.metaIconStyle} /> },
    input: { color: 'default', icon: <InputIcon sx={nodeRowStyle.metaIconStyle} /> },
};

const NodeRowComponent = ({ node, selected, onSelect, onDelete }: NodeRowComponentPropsType) => {
    const meta = TYPE_META[node.type];

    const { t } = useTranslation('viewBuilder');

    return (
        <Box
            onClick={onSelect}
            sx={[
                nodeRowStyle.containerBaseStyle,
                {
                    borderColor: selected ? 'primary.main' : 'transparent',
                    bgcolor: selected ? 'primary.50' : 'transparent',
                    '&:hover': {
                        bgcolor: selected ? 'primary.50' : 'action.hover',
                        borderColor: 'divider',
                    },
                },
            ]}
        >
            <Chip label={node.type} size="small" color={meta.color} sx={nodeRowStyle.chipStyle} />
            <Typography variant="body2" sx={nodeRowStyle.labelStyle}>
                {node.label}
            </Typography>
            <Tooltip title={t('delete')}>
                <IconButton
                    className="node-delete"
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    sx={nodeRowStyle.deleteButtonStyle}
                >
                    <DeleteIcon sx={nodeRowStyle.deleteButtonIconStyle} />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default NodeRowComponent;
