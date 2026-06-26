import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { COMPONENT_CONSTANTS } from '../constants';
import { componentPaletteComponentStyle } from '../styles';
import type { ComponentPaletteComponentPropsType } from '../types';

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
            {COMPONENT_CONSTANTS.map(({ type, label, icon }) => (
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
