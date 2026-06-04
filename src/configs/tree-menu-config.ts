import type { TreeMenuItem } from '@types';

export const treeMenuConfig: TreeMenuItem[] = [
    {
        id: 'users',
        label: 'Users',
        children: [
            { id: 'user-list', label: 'User List', href: '/users' },
            { id: 'user-register', label: 'User Register', href: '/users/register' },
        ],
    },
];
