import React from 'react';

import { Box, Chip, Divider, MenuItem, Select, TextField, Typography } from '@mui/material';

import type { SchemaNode, ButtonNode, InputNode, CardNode, GridNode } from '../types/schema';

interface Props {
    node: SchemaNode | null;
    onChange: (id: string, updates: Partial<SchemaNode>) => void;
}

export const PropertiesPanel: React.FC<Props> = ({ node, onChange }) => {
    if (!node) {
        return (
            <Box sx={{ pt: 4, textAlign: 'center' }}>
                <Typography variant="body2" color="text.disabled">
                    Pilih node untuk edit properti
                </Typography>
            </Box>
        );
    }

    const field = (label: string, el: React.ReactNode) => (
        <Box sx={{ mb: 1.5 }}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                {label}
            </Typography>
            {el}
        </Box>
    );

    const sx = { width: '100%', fontSize: 13 };

    return (
        <>
            <Typography
                variant="overline"
                color="text.secondary"
                sx={{ fontSize: 11, letterSpacing: '0.08em' }}
            >
                Properti — <span style={{ textTransform: 'capitalize' }}>{node.type}</span>
            </Typography>

            <Box sx={{ mt: 1.5 }}>
                {field(
                    'Label / id',
                    <TextField
                        size="small"
                        fullWidth
                        value={node.label}
                        onChange={(e) =>
                            onChange(node.id, { label: e.target.value } as Partial<SchemaNode>)
                        }
                    />,
                )}

                {node.type === 'card' &&
                    field(
                        'Elevation (0–24)',
                        <TextField
                            size="small"
                            type="number"
                            fullWidth
                            value={(node as CardNode).elevation}
                            onChange={(e) =>
                                onChange(node.id, {
                                    elevation: parseInt(e.target.value) || 0,
                                } as Partial<CardNode>)
                            }
                        />,
                    )}

                {node.type === 'grid' &&
                    field(
                        'Spacing',
                        <TextField
                            size="small"
                            type="number"
                            fullWidth
                            value={(node as GridNode).spacing}
                            onChange={(e) =>
                                onChange(node.id, {
                                    spacing: parseInt(e.target.value) || 0,
                                } as Partial<GridNode>)
                            }
                        />,
                    )}

                {node.type === 'button' && (
                    <>
                        {field(
                            'Variant',
                            <Select
                                size="small"
                                sx={sx}
                                value={(node as ButtonNode).variant}
                                onChange={(e) =>
                                    onChange(node.id, {
                                        variant: e.target.value,
                                    } as Partial<ButtonNode>)
                                }
                            >
                                <MenuItem value="contained">contained</MenuItem>
                                <MenuItem value="outlined">outlined</MenuItem>
                                <MenuItem value="text">text</MenuItem>
                            </Select>,
                        )}
                        {field(
                            'Color',
                            <Select
                                size="small"
                                sx={sx}
                                value={(node as ButtonNode).color}
                                onChange={(e) =>
                                    onChange(node.id, {
                                        color: e.target.value,
                                    } as Partial<ButtonNode>)
                                }
                            >
                                <MenuItem value="primary">primary</MenuItem>
                                <MenuItem value="secondary">secondary</MenuItem>
                                <MenuItem value="error">error</MenuItem>
                                <MenuItem value="inherit">inherit</MenuItem>
                            </Select>,
                        )}
                        {field(
                            'onClick handler',
                            <TextField
                                size="small"
                                fullWidth
                                value={(node as ButtonNode).onClick}
                                placeholder="handleClick"
                                onChange={(e) =>
                                    onChange(node.id, {
                                        onClick: e.target.value,
                                    } as Partial<ButtonNode>)
                                }
                            />,
                        )}
                    </>
                )}

                {node.type === 'input' && (
                    <>
                        {field(
                            'Tipe input',
                            <Select
                                size="small"
                                sx={sx}
                                value={(node as InputNode).inputType}
                                onChange={(e) =>
                                    onChange(node.id, {
                                        inputType: e.target.value,
                                    } as Partial<InputNode>)
                                }
                            >
                                <MenuItem value="text">text</MenuItem>
                                <MenuItem value="number">number</MenuItem>
                                <MenuItem value="email">email</MenuItem>
                                <MenuItem value="password">password</MenuItem>
                            </Select>,
                        )}
                        {field(
                            'Placeholder',
                            <TextField
                                size="small"
                                fullWidth
                                value={(node as InputNode).placeholder}
                                onChange={(e) =>
                                    onChange(node.id, {
                                        placeholder: e.target.value,
                                    } as Partial<InputNode>)
                                }
                            />,
                        )}
                        {field(
                            'onChange handler',
                            <TextField
                                size="small"
                                fullWidth
                                value={(node as InputNode).onChange}
                                placeholder="handleChange"
                                onChange={(e) =>
                                    onChange(node.id, {
                                        onChange: e.target.value,
                                    } as Partial<InputNode>)
                                }
                            />,
                        )}
                    </>
                )}

                {/* Events summary */}
                {(('onClick' in node && node.onClick) || ('onChange' in node && node.onChange)) && (
                    <>
                        <Divider sx={{ my: 1.5 }} />
                        <Typography
                            variant="overline"
                            color="text.secondary"
                            sx={{ fontSize: 11, letterSpacing: '0.08em', display: 'block', mb: 1 }}
                        >
                            Events
                        </Typography>
                        {'onClick' in node && node.onClick && (
                            <Chip
                                label={`onClick: ${node.onClick}`}
                                size="small"
                                color="success"
                                sx={{ mr: 0.5, mb: 0.5, fontSize: 11 }}
                            />
                        )}
                        {'onChange' in node && node.onChange && (
                            <Chip
                                label={`onChange: ${node.onChange}`}
                                size="small"
                                color="info"
                                sx={{ mb: 0.5, fontSize: 11 }}
                            />
                        )}
                    </>
                )}
            </Box>
        </>
    );
};
