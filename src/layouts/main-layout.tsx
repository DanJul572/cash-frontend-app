import { Outlet } from '@tanstack/react-router';

import { TreeMenuComponent } from '@/components';

import Box from '@mui/material/Box';

export default function MainLayout() {
    return (
        <Box>
            <TreeMenuComponent />
            <Outlet />
        </Box>
    );
}
