import Box from '@mui/material/Box';

import { TopbarComponent, TreeMenuComponent } from '@components';
import { mainLayoutStyle } from '@styles';
import { Outlet } from '@tanstack/react-router';

export default function MainLayout() {
    return (
        <Box>
            <TopbarComponent />
            <Box sx={mainLayoutStyle.container}>
                <TreeMenuComponent />
                <Box sx={mainLayoutStyle.content}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}
