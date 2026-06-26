import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';

import type { ComponentType } from '../types';

interface Props {
    onAdd: (type: ComponentType) => void;
}

const TYPES: ComponentType[] = ['card', 'grid', 'button', 'input'];

export const AddChildBar: React.FC<Props> = ({ onAdd }) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, alignItems: 'center', mt: 0.5 }}>
        <AddIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
        {TYPES.map((t) => (
            <Button
                key={t}
                size="small"
                onClick={(e) => {
                    e.stopPropagation();
                    onAdd(t);
                }}
                sx={{
                    fontSize: 11,
                    minWidth: 0,
                    px: 1,
                    py: 0.25,
                    textTransform: 'none',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'primary.50' },
                }}
            >
                {t}
            </Button>
        ))}
    </Box>
);
