import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Table from "./Table";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";

export default function FloatingActionButtons() {
  const [cfr, setCFR] = useState("");
  const [type, setType] = useState("");
  const [types, setTypes] = useState([]);
  const [imgSrc, setImgSrc] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [engine, setEngine] = React.useState();
  const [vehDesc, setVehDesc] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    const Vehicle = { cfr: cfr, type: type };
    fetch("http://localhost:8080/vehicles/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Vehicle),
    }).then(() => {
      console.log("New vehicle added");
      setOpen(false);
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/types/getAll")
      .then((res) => res.json())
      .then((result) => {
        setTypes(result);
      });
  }, []);

  return (
    <Box p={2} sx={{ height: "100%", width: "100%" }}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{ alignItems: "stretch" }}
      >
        <LeftSideBar />
        <Box flex={3}>
          <Container>
            <Grid container direction="row" alignItems="flex-end">
              <Grid item xs={4} p={1}>
                <Button variant="contained" onClick={handleClickOpen}>
                  Add Vehicle
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Add</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Enter a Vehicle into the database
                    </DialogContentText>
                    <Stack direction="row" spacing={5}>
                      <TextField
                        autoFocus
                        id="cfr"
                        label="CFR"
                        value={cfr}
                        onChange={(e) => setCFR(e.target.value)}
                        fullWidth
                        variant="standard"
                      />
                      <Select
                        autoFocus
                        defaultValue=""
                        id="type"
                        label="Type"
                        value={type}
                        onChange={(ev) => setType(ev.target.value)}
                        fullWidth
                        variant="standard"
                      >
                        <MenuItem value="">
                          <em>Choose Type</em>
                        </MenuItem>
                        {types.map((e) => (
                          <MenuItem key={e.type} value={e.type}>
                            {e.type}
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                      onClick={() => {
                        setCFR("");
                        setType("");
                        handleClick();
                      }}
                    >
                      Add
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "center" }}>
                <h1>Table</h1>
              </Grid>
              <Grid item xs={4} p={1} sx={{ textAlign: "right" }}>
                Designed By: JB
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Table
              setImageSource={setImgSrc}
              setEngine={setEngine}
              setVehDesc={setVehDesc}
            />
          </Container>
        </Box>
        <RightSideBar imageSource={imgSrc} engine={engine} desc={vehDesc} />
      </Stack>
    </Box>
  );
}
