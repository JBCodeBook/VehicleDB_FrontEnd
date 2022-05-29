import * as React from 'react';
import {useState, useEffect } from 'react';
import { DataGrid, rowModesModel } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';


export default function App() {

  const[cfr, setCFR]=useState('')
  const[type, setType]=useState('')
  const[vehicles, setVehicles]=useState([])
  const isInEditMode = true


  const handleDeleteClick=(e)=>{
    // e.preventDefault()
    console.log(e.row)
    fetch("http://localhost:8080/vehicles/delete",{
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(e.row)
    }).then(()=>{
        console.log("vehicle Deleted")
    })
  }

  const rows = [
    { CFR: '52255', Type: 'LSVW'},
    { CFR: '22555', Type: 'HLVW'},
    { CFR: '11223', Type: 'HLVW'},
    
  ];
  
  const columns = [
    { field: 'cfr', headerName: 'CFR', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    {
      field: 'dateInspected',
      headerName: 'Date Inspected',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'nextInspection',
      headerName: 'Next Inspection',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: "Delete",
      width: "60",
      renderCell: (cellValues: any) => (
        <Tooltip title="Delete">
          <DeleteIcon
            variant="contained"
            color="primary"
            onClick={() => {
              handleDeleteClick(cellValues);
            }}
          >
          </DeleteIcon>
        </Tooltip>
      ),
    },
  ]


  useEffect(()=>{
      fetch("http://localhost:8080/vehicles/getAll")
      .then(res=>res.json())
      .then((result)=>{
          setVehicles(result);
      }
  )
  },[])

  return (    
    <Box  sx={{
      height: 500,
      width: '100%',
      '& .actions': {
        color: 'text.secondary',
      },
      '& .textPrimary': {
        color: 'text.primary',
      },
    }}>
      <DataGrid 
      getRowId={(row) => row.cfr}
      density={'compact'}
      rows={vehicles} 
      columns={columns} 
      />
    </Box>
  );
}
