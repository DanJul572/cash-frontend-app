import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Outlet, createLink } from '@tanstack/react-router';

import { playgroundPages } from './playground-pages';

const ButtonLink = createLink(Button);

const toolbarStyle = { gap: 1, borderBottom: 1, borderColor: 'divider' } as const;

export default function PlaygroundLayoutComponent() {
  return (
    <Box>
      <Toolbar sx={toolbarStyle}>
        <Typography variant="h6" sx={{ mr: 2 }}>
          Playground
        </Typography>
        {playgroundPages.map(({ path, label }) => (
          <ButtonLink key={path} to={path} activeProps={{ variant: 'contained' }}>
            {label}
          </ButtonLink>
        ))}
      </Toolbar>
      <Outlet />
    </Box>
  );
}
