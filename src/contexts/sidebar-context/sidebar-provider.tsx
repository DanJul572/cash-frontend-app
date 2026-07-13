import { useCallback, useState, type ReactNode } from 'react';

import { SidebarContext } from './sidebar-context';

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = useCallback(() => setIsCollapsed((prev) => !prev), []);

    return (
        <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}
