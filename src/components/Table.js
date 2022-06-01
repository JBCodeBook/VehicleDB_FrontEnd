import * as React from "react";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function Table(props) {
  const [vehicles, setVehicles] = useState([]);

  const handleDeleteClick = (e) => {
    fetch("http://localhost:8080/vehicles/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e.row),
    }).then(() => {
      console.log("vehicle Deleted");
    });
  };

  const handleRowSelect = (e) => {
    fetch("http://localhost:8080/types/getId?type=" + e, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        props.setEngine(res.engine);
        props.setVehDesc(res.desc);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/vehicles/getAll")
      .then((res) => res.json())
      .then((result) => {
        setVehicles(result);
      });
  }, []);

  const columns = [
    { field: "cfr", headerName: "CFR", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "dateInspected",
      headerName: "Date Inspected",
      type: "date",
      width: 180,
    },
    {
      field: "nextInspection",
      headerName: "Next Inspection",
      type: "date",
      width: 180,
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
          ></DeleteIcon>
        </Tooltip>
      ),
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        getRowId={(row) => row.cfr}
        density={"compact"}
        rows={vehicles}
        columns={columns}
        onRowClick={(itm) => {
          props.setImageSource(itm.row);
          handleRowSelect(itm.row.type);
        }}
      />
    </Box>
  );
}
