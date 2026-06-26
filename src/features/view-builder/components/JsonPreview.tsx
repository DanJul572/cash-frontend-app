import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import type {
    SchemaNodeType,
    CardNodeType,
    GridNodeType,
    ButtonNodeType,
    InputNodeType,
} from '../types';

function toJson(list: SchemaNodeType[]): unknown[] {
    return list.map((n) => {
        const out: Record<string, unknown> = { id: n.id, type: n.type };
        if (n.label) out.label = n.label;
        if (n.type === 'button') {
            const b = n as ButtonNodeType;
            out.variant = b.variant;
            out.color = b.color;
            out.onClick = b.onClick || null;
        }
        if (n.type === 'input') {
            const inp = n as InputNodeType;
            out.inputType = inp.inputType;
            if (inp.placeholder) out.placeholder = inp.placeholder;
            out.onChange = inp.onChange || null;
        }
        if (n.type === 'card') {
            const c = n as CardNodeType;
            out.elevation = c.elevation;
            out.children = toJson(c.children);
        }
        if (n.type === 'grid') {
            const g = n as GridNodeType;
            out.spacing = g.spacing;
            out.rows = g.rows.map((row) => ({ columns: toJson(row.columns) }));
        }
        return out;
    });
}

interface Props {
    nodes: SchemaNodeType[];
}

export const JsonPreview: React.FC<Props> = ({ nodes }) => {
    const [copied, setCopied] = useState(false);
    const json = JSON.stringify(toJson(nodes), null, 2);

    const handleCopy = () => {
        navigator.clipboard.writeText(json).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
            <Button
                fullWidth
                startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
                onClick={handleCopy}
                variant="outlined"
                size="small"
                color={copied ? 'success' : 'inherit'}
                sx={{ mt: 1, textTransform: 'none', fontSize: 12 }}
            >
                {copied ? 'Tersalin!' : 'Salin JSON'}
            </Button>
        </Box>
    );
};
