import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import { Box , Toolbar } from '@mui/material';

function MainView(props) {

    const drawerWidth = 240;

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            

        </Box>

    );
}

export default MainView;