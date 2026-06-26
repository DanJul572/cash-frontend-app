import DashboardIcon from '@mui/icons-material/Dashboard';
import GridViewIcon from '@mui/icons-material/GridView';
import InputIcon from '@mui/icons-material/Input';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

import type { ComponentConstantType } from '../types';

export const COMPONENT_CONSTANTS: ComponentConstantType[] = [
    { type: 'card', label: 'Card', icon: <DashboardIcon fontSize="small" color="success" /> },
    { type: 'grid', label: 'Grid', icon: <GridViewIcon fontSize="small" color="success" /> },
    {
        type: 'button',
        label: 'Button',
        icon: <SmartButtonIcon fontSize="small" color="secondary" />,
    },
    { type: 'input', label: 'Input', icon: <InputIcon fontSize="small" color="primary" /> },
];
