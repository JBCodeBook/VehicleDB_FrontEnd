import * as React from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function RightSideBar(props) {
  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "black",
    border: 1,
  };

  if (props.imageSource == null) {
    var image = require("../pictures/crest.jpg");
  } else {
    var imageLink = require("../pictures/" + props.imageSource.type + ".jpg");
  }

  if (props.imageSource == null) {
    var vehName = "Vehicle Database";
  } else {
    var vehName = props.imageSource.type
  }

  if (props.engine == null) {
    var engineText = "No data Yet";
  } else {
    var engineText = props.engine;
  }

  var wikiLinke = props.wiki

  if (props.desc == null) {
    var vehDesc = "Welcome to the Canadian Foces Vehicle Database";
  } else {
    var vehDesc = props.desc;
  }

  return (
    <Box
      maxWidth="sm"
      flex={1}
      p={2}
      sx={{
        ...commonStyles,
        display: { xs: "none", sm: "block" },
        borderRadius: "16px",
        width: "100%",
      }}
    >
      <Box sx={{ ...commonStyles, height: "100%" }}>
        <Stack
          p={1}
          spacing={1}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Container>
            <h1>{vehName}</h1>
          </Container>

          <Box sx={{ ...commonStyles }}>
            <Card sx={{}}>
              <CardMedia
                component="img"
                alt="Vehicle"
                height="100%"
                width="100%"
                src={imageLink}
                
              />
              <CardContent p={2}>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  text-align="center"
                  p={1}
                >
                  <h2>Engine:</h2> {engineText}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  text-align="center"
                >
                  <h2>Description:</h2> {vehDesc}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
