import { createContext, type Dispatch, type SetStateAction } from 'react';

export type SidebarContextType = {
    isCollapsed: boolean;
    toggleSidebar: () => void;
    setIsCollapsed: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
