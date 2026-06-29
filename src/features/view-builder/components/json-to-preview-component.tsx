import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { useJsonPreviewHook } from '../hooks';
import { jsonPreviewComponentStyle } from '../styles';
import type { JsonPreviewHookPropsType } from '../types';

const JsonPreviewComponent = ({ nodes }: JsonPreviewHookPropsType) => {
    const { t } = useTranslation('viewBuilder');

    const { copied, handleCopy } = useJsonPreviewHook({ nodes });

    return (
        <Box sx={jsonPreviewComponentStyle.containerStyle}>
            <Button
                fullWidth
                startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                onClick={handleCopy}
                variant="outlined"
                size="small"
                color={copied ? 'success' : 'inherit'}
                sx={jsonPreviewComponentStyle.buttonStyle}
            >
                {copied ? `${t('copied')}!` : `${t('copy')} JSON`}
            </Button>
        </Box>
    );
};

export default JsonPreviewComponent;
