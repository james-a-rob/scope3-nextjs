'use client';
import Image from 'next/image'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'format', headerName: 'format', width: 90, editable: true },
  {
    field: 'date',
    headerName: 'date',
    width: 150,
    editable: true,
  },
  {
    field: 'impressions',
    headerName: 'impressions',
    width: 150,
    editable: true,
  },
  {
    field: 'country',
    headerName: 'country',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'emissions',
    headerName: 'emissions',
    type: 'number',
    width: 110,
    editable: false,
  },
];

const rows = [
  { id: 1, format: 'banner', date: '02-12-2023', impressions: 1000, country: 'US' },
  { id: 2, format: 'banner', date: '02-12-2023', impressions: 1000, country: 'US' },
  { id: 3, format: 'banner', date: '02-12-2023', impressions: 1000, country: 'US' },

];



export default function Home() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      onRowEditStop={(params) => console.log(params)} 
      editMode="row"

      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  )
}
