import * as React from 'react';
import { Box } from '@mui/system';

export default function FloatingActionButtons() {
  return (
      <Box maxWidth="sm" flex={2} p={2} sx={{ display: { xs: "none", sm:"block"}, bgcolor: '#030bfc', height: '100%', width: '100%'}} >
          <h1>hello</h1>
      </Box>
  );
}
