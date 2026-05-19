import type { TreeMenuItem } from '@/types';

export const treeMenuConfig: TreeMenuItem[] = [
    {
        id: 'grid',
        label: 'Data Grid',
        children: [
            { id: 'grid-community', label: '@mui/x-data-grid', href: '/grid/community' },
            { id: 'grid-pro', label: '@mui/x-data-grid-pro', href: '/grid/pro' },
            { id: 'grid-premium', label: '@mui/x-data-grid-premium', href: '/grid/premium' },
        ],
    },
    {
        id: 'pickers',
        label: 'Date and Time Pickers',
        children: [
            { id: 'pickers-community', label: '@mui/x-date-pickers', href: '/pickers/community' },
            { id: 'pickers-pro', label: '@mui/x-date-pickers-pro', href: '/pickers/pro' },
        ],
    },
    {
        id: 'charts',
        label: 'Charts',
        children: [{ id: 'charts-community', label: '@mui/x-charts', href: '/charts/community' }],
    },
    {
        id: 'tree-view',
        label: 'Tree View',
        children: [
            { id: 'tree-view-community', label: '@mui/x-tree-view', href: '/tree-view/community' },
        ],
    },
];
