import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GridViewIcon from '@mui/icons-material/GridView';
import InputIcon from '@mui/icons-material/Input';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

import { componentPaletteComponentStyle } from '../styles';
import type { ComponentConstantType, ComponentPaletteComponentPropsType } from '../types';

const COMPONENTS: ComponentConstantType[] = [
    { type: 'card', label: 'Card', icon: <DashboardIcon fontSize="small" color="success" /> },
    { type: 'grid', label: 'Grid', icon: <GridViewIcon fontSize="small" color="success" /> },
    {
        type: 'button',
        label: 'Button',
        icon: <SmartButtonIcon fontSize="small" color="secondary" />,
    },
    { type: 'input', label: 'Input', icon: <InputIcon fontSize="small" color="primary" /> },
];

export default function ComponentPaletteComponent({ onAdd }: ComponentPaletteComponentPropsType) {
    const { t } = useTranslation('viewBuilder');

    return (
        <Box sx={componentPaletteComponentStyle.containerStyle}>
            <Typography
                variant="overline"
                color="text.secondary"
                sx={componentPaletteComponentStyle.titleStyle}
            >
                {t('component')}
            </Typography>
            {COMPONENTS.map(({ type, label, icon }) => (
                <Button
                    key={type}
                    startIcon={icon}
                    onClick={() => onAdd(type)}
                    fullWidth
                    variant="outlined"
                    sx={componentPaletteComponentStyle.buttonComponentStyle}
                >
                    {label}
                </Button>
            ))}
            <Divider sx={componentPaletteComponentStyle.dividerStyle} />
            <Typography variant="caption" color="text.disabled" sx={{ lineHeight: 1.6 }}>
                {t('add-new-component')} <strong>+ {t('child')}</strong>
            </Typography>
        </Box>
    );
}
