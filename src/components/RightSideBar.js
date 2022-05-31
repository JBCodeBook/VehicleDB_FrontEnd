import * as React from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import logo from "../pictures/crest.jpg";

export default function RightSideBar(props) {
  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "black",
    border: 1,
  };

  if(props.imageSource == null){
    var image = require('../pictures/crest.jpg')
  } else {
    var image =  require('../pictures/' + props.imageSource + '.jpg')
  }

  const handleImage = () => {
    console.log("Change")
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
            <h1>Vehicle Data</h1>
          </Container>

          <Box sx={{ ...commonStyles, height: "300px" }}>
            <Card sx={{}}>
              <CardMedia
                component="img"
                alt="Vehicle"
                height="100%"
                width="100%"
                src= {image} 
              />
              <CardContent p={2}>
                <Typography gutterBottom variant="h5" component="div">
                  {console.log(props.imageSource == null)}
                  {console.log(image)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  text-align="center"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
