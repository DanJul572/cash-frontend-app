import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@zapplib/core';

import { error400Style } from '../styles';
import type { ErrorPagePropsType } from '../types';

export default function Error400Page({ message = 'Bad Request' }: ErrorPagePropsType) {
  useTitleHook('400 Bad Request');

  return (
    <Box sx={error400Style.containerStyle}>
      <Typography variant="h1" sx={error400Style.codeStyle}>
        400
      </Typography>
      <Divider sx={error400Style.dividerStyle} />
      <Typography variant="h6" sx={error400Style.textStyle}>
        {message}
      </Typography>
    </Box>
  );
}
