import React from 'react'
import MiniDrawer from "../Component/SideBar"
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const About = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center" }}>
      <MiniDrawer />
      <h1>About</h1>
    </Box>


  )
}

export default About
