import React from 'react';

import { Box, Button, Divider, Typography } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GridViewIcon from '@mui/icons-material/GridView';
import InputIcon from '@mui/icons-material/Input';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

import type { ComponentType } from '../types/schema';

interface Props {
    onAdd: (type: ComponentType) => void;
}

const COMPONENTS: { type: ComponentType; label: string; icon: React.ReactNode; color: string }[] = [
    { type: 'card', label: 'Card', icon: <DashboardIcon fontSize="small" />, color: '#7F77DD' },
    { type: 'grid', label: 'Grid', icon: <GridViewIcon fontSize="small" />, color: '#1D9E75' },
    {
        type: 'button',
        label: 'Button',
        icon: <SmartButtonIcon fontSize="small" />,
        color: '#D85A30',
    },
    { type: 'input', label: 'Input', icon: <InputIcon fontSize="small" />, color: '#BA7517' },
];

export const ComponentPalette: React.FC<Props> = ({ onAdd }) => (
    <Box sx={{ width: 180, flexShrink: 0 }}>
        <Typography
            variant="overline"
            color="text.secondary"
            sx={{ fontSize: 11, letterSpacing: '0.08em', display: 'block', mb: 1.5 }}
        >
            Komponen
        </Typography>
        {COMPONENTS.map(({ type, label, icon, color }) => (
            <Button
                key={type}
                startIcon={icon}
                onClick={() => onAdd(type)}
                fullWidth
                variant="outlined"
                sx={{
                    mb: 0.75,
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    borderColor: 'divider',
                    color: 'text.primary',
                    fontSize: 13,
                    '&:hover': {
                        borderColor: color,
                        color: color,
                        bgcolor: `${color}11`,
                    },
                }}
            >
                {label}
            </Button>
        ))}
        <Divider sx={{ my: 1.5 }} />
        <Typography variant="caption" color="text.disabled" sx={{ lineHeight: 1.6 }}>
            Klik untuk tambah ke root, atau pilih node lalu klik <strong>+ child</strong>
        </Typography>
    </Box>
);
