import './App.css';
import MainBody from './components/MainBody'
import LeftSideBar from './components/LeftSidebar'
import RightSideBar from './components/RightSideBar'
import AppBar from './components/AppBar';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';

function App() {
  return (

    <Box>
 
      <AppBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftSideBar  />
          <MainBody  />
        <RightSideBar />
      </Stack>
    </Box>


  );
}

export default App;
