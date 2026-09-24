import type { ZTableColumnType } from '@type-defs/ztable-component-type';

import type { TestZTableRowType } from '../types';

export const TEST_ZTABLE_COLUMNS_CONSTANT: ZTableColumnType<TestZTableRowType>[] = [
  { field: 'id', headerName: 'ID', width: 90, filterType: 'number' },
  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    valueGetter: (_value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'joinDate',
    headerName: 'Join date',
    flex: 1,
    filterType: 'date',
  },
  {
    field: 'loginTime',
    headerName: 'Login time',
    flex: 1,
    filterType: 'time',
  },
];

export const TEST_ZTABLE_ROWS_CONSTANT: TestZTableRowType[] = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 14,
    joinDate: '2024-01-15',
    loginTime: '08:30',
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 31,
    joinDate: '2023-11-02',
    loginTime: '09:15',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 31,
    joinDate: '2023-11-02',
    loginTime: '13:45',
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 11,
    joinDate: '2024-03-20',
    loginTime: '07:00',
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    joinDate: '2022-07-08',
    loginTime: '22:10',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 150,
    joinDate: '2021-12-31',
    loginTime: '18:05',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    joinDate: '2024-05-11',
    loginTime: '10:20',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    joinDate: '2023-08-19',
    loginTime: '16:40',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65,
    joinDate: '2024-02-29',
    loginTime: '12:00',
  },
];
