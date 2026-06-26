import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';

import { NODE_TYPE_CONSTANT } from '../constants';
import { addChildBarComponentStyle } from '../styles';
import type { AddChildBarComponentPropsType } from '../types';

const AddChildBarComponent = ({ onAdd }: AddChildBarComponentPropsType) => (
    <Box sx={addChildBarComponentStyle.container}>
        <AddIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
        {NODE_TYPE_CONSTANT.map((t) => (
            <Button
                key={t}
                size="small"
                onClick={(e) => {
                    e.stopPropagation();
                    onAdd(t);
                }}
                sx={addChildBarComponentStyle.button}
            >
                {t}
            </Button>
        ))}
    </Box>
);

export default AddChildBarComponent;
