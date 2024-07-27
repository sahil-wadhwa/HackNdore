import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'paint', col2: 'Finance',col3:742-74,col4:114,col5:16,col6:42,col7:93,col8:397.37 },
  { id: 1, col1: 'tubelight', col2: 'Healthcare',col3:928-25,col4:410,col5:8,col6:16,col7:93,col8:834.74 },
  { id: 1, col1: 'paint', col2: 'Finance',col3:742-74,col4:114,col5:16,col6:42,col7:93,col8:397.37},
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'ID', width: 120 },
  { field: 'col2', headerName: 'Supply Name', width: 120 },
  { field: 'col3', headerName: 'Department', width: 120 },
  { field: 'col4', headerName: 'Batch Number', width: 120 },
  { field: 'col5', headerName: 'Quantity', width: 120 },
  { field: 'col6', headerName: 'Shelf Life', width: 120 },
  { field: 'col7', headerName: 'Reorder Level', width: 120 },
  { field: 'col8', headerName: 'Reorder Quantity', width: 120 },
  { field: 'col9', headerName: 'Cost', width: 120 },


];

export default function Data() {
  return (
    <div className='p-5' style={{ height: '100%', width: '100%' }}>

        <DataGrid rows={rows} columns={columns} className='border-4 border-black' />
    </div>
  );
}
