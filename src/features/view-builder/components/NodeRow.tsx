import React from 'react';

import { Box, Chip, IconButton, Tooltip, Typography } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import GridViewIcon from '@mui/icons-material/GridView';
import InputIcon from '@mui/icons-material/Input';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

import type { SchemaNodeType } from '../types';

const TYPE_META: Record<
    string,
    { color: 'default' | 'secondary' | 'warning' | 'success'; icon: React.ReactNode }
> = {
    card: { color: 'secondary', icon: <DashboardIcon sx={{ fontSize: 14 }} /> },
    grid: { color: 'success', icon: <GridViewIcon sx={{ fontSize: 14 }} /> },
    button: { color: 'warning', icon: <SmartButtonIcon sx={{ fontSize: 14 }} /> },
    input: { color: 'default', icon: <InputIcon sx={{ fontSize: 14 }} /> },
};

interface Props {
    node: SchemaNodeType;
    selected: boolean;
    onSelect: () => void;
    onDelete: () => void;
}

export const NodeRow: React.FC<Props> = ({ node, selected, onSelect, onDelete }) => {
    const meta = TYPE_META[node.type];

    return (
        <Box
            onClick={onSelect}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1,
                py: 0.625,
                borderRadius: 1,
                border: '0.5px solid',
                borderColor: selected ? 'primary.main' : 'transparent',
                bgcolor: selected ? 'primary.50' : 'transparent',
                cursor: 'pointer',
                mb: 0.375,
                transition: 'all 0.1s',
                '&:hover': {
                    bgcolor: selected ? 'primary.50' : 'action.hover',
                    borderColor: 'divider',
                },
                '&:hover .node-delete': { opacity: 1 },
            }}
        >
            <Chip
                label={node.type}
                size="small"
                color={meta.color}
                sx={{ fontSize: 11, height: 20, '& .MuiChip-icon': { ml: '6px' } }}
            />
            <Typography
                variant="body2"
                sx={{
                    flex: 1,
                    fontSize: 13,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                {node.label || '—'}
            </Typography>
            <Tooltip title="Hapus node">
                <IconButton
                    className="node-delete"
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    sx={{ opacity: 0, transition: 'opacity 0.1s', color: 'error.main', p: 0.25 }}
                >
                    <DeleteIcon sx={{ fontSize: 14 }} />
                </IconButton>
            </Tooltip>
        </Box>
    );
};
