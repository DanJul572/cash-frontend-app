import Box from '@mui/material/Box';

import { Outlet } from '@tanstack/react-router';

import { TopbarComponent, TreeMenuComponent } from '@components';
import { SidebarProvider, useSidebarContext } from '@contexts';
import { mainLayoutStyle } from '@styles';

function MainLayoutInner() {
    const { isCollapsed } = useSidebarContext();

    return (
        <Box>
            <TopbarComponent />
            <Box sx={mainLayoutStyle.container}>
                <TreeMenuComponent />
                <Box
                    sx={{
                        ...mainLayoutStyle.content,
                        left: isCollapsed ? 72 : 350,
                        transition: 'left 0.3s ease-in-out',
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default function MainLayout() {
    return (
        <SidebarProvider>
            <MainLayoutInner />
        </SidebarProvider>
    );
}
