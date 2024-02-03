import React from 'react'
import MiniDrawer from "../Component/SideBar"
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const Home = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center" }}>
      <MiniDrawer />
      <h1>Home</h1>
    </Box>


  )
}

export default Home
