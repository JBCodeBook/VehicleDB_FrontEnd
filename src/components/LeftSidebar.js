import * as React from 'react';
import { Box } from '@mui/system';

export default function FloatingActionButtons() {
  return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm:"block"}, bgcolor: '#fc03d3', height: '100%', width: '100%'}} />
  );
}
