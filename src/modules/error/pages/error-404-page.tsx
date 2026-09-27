import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@zapplib/core';

import { error404Style } from '../styles';
import type { ErrorPagePropsType } from '../types';

export default function Error404Page({ message = 'Page Not Found' }: ErrorPagePropsType) {
  useTitleHook('404 Page Not Found');

  return (
    <Box sx={error404Style.containerStyle}>
      <Typography variant="h1" sx={error404Style.codeStyle}>
        404
      </Typography>
      <Divider sx={error404Style.dividerStyle} />
      <Typography variant="h6" sx={error404Style.textStyle}>
        {message}
      </Typography>
    </Box>
  );
}
