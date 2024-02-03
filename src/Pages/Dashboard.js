import React from 'react'
import MiniDrawer from "../Component/SideBar"
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex',justifyContent:"center" }}>
      <MiniDrawer />
      <h1>Dashboard</h1>
    </Box>


  )
}

export default Dashboard
