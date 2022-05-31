import * as React from 'react';
import { Box, Container } from '@mui/system';

export default function FloatingActionButtons() {

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'black',
    m: 1,
    border: 1,
  };

  return (
      <Box maxWidth="sm" flex={1} p={2} sx={{ ...commonStyles, display: { xs: "none", sm:"block"},  borderRadius: '16px', width: '100%'}} >
          <Container>
            <h1>No idea yet</h1>
            </Container>
      </Box>
  );
}
