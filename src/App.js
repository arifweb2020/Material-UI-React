import React from 'react';
import SideNav from './components/SideNav/SideNav';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router} from 'react-router-dom'
import { Box } from '@mui/material';
import MainView from './MainView';


function App(props) {
  return (

    <Router>
      <>
      <Box sx={{ display: 'flex' }}>
      <GlobalStyle/>
      <SideNav/>
      <MainView/>
      </Box>
    </>
    </Router>
  );
}

export default App;
