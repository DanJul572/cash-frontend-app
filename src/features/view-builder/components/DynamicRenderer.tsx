import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import type {
    ButtonNodeType,
    CardNodeType,
    GridNodeType,
    InputNodeType,
    SchemaNodeType,
} from '../types';

// Map of handler names to actual functions.
// Replace or extend this with your real handlers.
type HandlerMap = Record<string, (...args: unknown[]) => void>;

const defaultHandlers: HandlerMap = {
    handleClick: () => console.log('button clicked'),
    handleChange: (e: unknown) => console.log('input changed', e),
};

interface RenderNodeProps {
    node: SchemaNodeType;
    handlers?: HandlerMap;
}

export const RenderNode: React.FC<RenderNodeProps> = ({ node, handlers = defaultHandlers }) => {
    if (node.type === 'card') {
        const card = node as CardNodeType;
        return (
            <Card elevation={card.elevation} sx={{ mb: 2 }}>
                <CardContent>
                    {card.children.map((child) => (
                        <RenderNode key={child.id} node={child} handlers={handlers} />
                    ))}
                </CardContent>
            </Card>
        );
    }

    if (node.type === 'grid') {
        const grid = node as GridNodeType;
        return (
            <Box sx={{ mb: 2 }}>
                {grid.rows.map((row, ri) => (
                    <Grid spacing={grid.spacing} key={ri} sx={{ mb: 1 }}>
                        {row.columns.map((col) => {
                            const xs = Math.max(1, Math.floor(12 / row.columns.length));
                            return (
                                <Grid size={xs} key={col.id}>
                                    <RenderNode node={col} handlers={handlers} />
                                </Grid>
                            );
                        })}
                    </Grid>
                ))}
            </Box>
        );
    }

    if (node.type === 'button') {
        const btn = node as ButtonNodeType;
        return (
            <Button
                variant={btn.variant}
                color={btn.color}
                onClick={handlers[btn.onClick] as React.MouseEventHandler}
                sx={{ mr: 1, mb: 1 }}
            >
                {btn.label}
            </Button>
        );
    }

    if (node.type === 'input') {
        const inp = node as InputNodeType;
        return (
            <TextField
                fullWidth
                type={inp.inputType}
                label={inp.label}
                placeholder={inp.placeholder}
                onChange={handlers[inp.onChange] as React.ChangeEventHandler<HTMLInputElement>}
                variant="outlined"
                size="small"
                sx={{ mb: 1 }}
            />
        );
    }

    return null;
};
interface DynamicLayoutProps {
    schema: SchemaNodeType[];
    handlers?: HandlerMap;
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ schema, handlers }) => (
    <>
        {schema.map((node) => (
            <RenderNode key={node.id} node={node} handlers={handlers} />
        ))}
    </>
);

export default DynamicLayout;
