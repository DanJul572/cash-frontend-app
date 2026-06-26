import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import type { SchemaNode, CardNode, GridNode, ButtonNode, InputNode } from '../types/schema';

function toJson(list: SchemaNode[]): unknown[] {
    return list.map((n) => {
        const out: Record<string, unknown> = { id: n.id, type: n.type };
        if (n.label) out.label = n.label;
        if (n.type === 'button') {
            const b = n as ButtonNode;
            out.variant = b.variant;
            out.color = b.color;
            out.onClick = b.onClick || null;
        }
        if (n.type === 'input') {
            const inp = n as InputNode;
            out.inputType = inp.inputType;
            if (inp.placeholder) out.placeholder = inp.placeholder;
            out.onChange = inp.onChange || null;
        }
        if (n.type === 'card') {
            const c = n as CardNode;
            out.elevation = c.elevation;
            out.children = toJson(c.children);
        }
        if (n.type === 'grid') {
            const g = n as GridNode;
            out.spacing = g.spacing;
            out.rows = g.rows.map((row) => ({ columns: toJson(row.columns) }));
        }
        return out;
    });
}

interface Props {
    nodes: SchemaNode[];
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
            <Typography
                variant="overline"
                color="text.secondary"
                sx={{ fontSize: 11, letterSpacing: '0.08em' }}
            >
                JSON Output
            </Typography>
            <Box
                component="pre"
                sx={{
                    mt: 1,
                    flex: 1,
                    overflow: 'auto',
                    bgcolor: 'grey.50',
                    border: '0.5px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    p: 1.25,
                    fontSize: 11,
                    fontFamily: 'monospace',
                    color: 'text.secondary',
                    lineHeight: 1.5,
                    minHeight: 120,
                }}
            >
                {nodes.length ? json : '[]'}
            </Box>
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
