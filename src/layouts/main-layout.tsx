import { Outlet } from '@tanstack/react-router';

import Box from '@mui/material/Box';

import { TreeMenuComponent } from '@/components';

export default function MainLayout() {
    return (
        <Box>
            <TreeMenuComponent />
            <Outlet />
        </Box>
    );
}
