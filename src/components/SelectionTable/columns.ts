import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'id', headerName: 'Id', type: 'number'
    },
    {
        field: 'firstYear',
        headerName: 'First Year',
        type: 'date',
        width: 110
    },
    {
        field: 'lastYear',
        headerName: 'Last Year',
        width: 110,
        type: 'date'
    },
    {
        field: 'notes',
        headerName: 'Notes',
        width: 110,
    },
];

export default columns;
