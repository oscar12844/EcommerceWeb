import React from 'react'
import { Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import BackpackIcon from '@mui/icons-material/Backpack';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function EnrolledLive() {

  const timecount = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const time = `${year}/${month}/${date} (${week[day]}) ${hour}:${minute}:${second}`;
    return time;
  }

  return (
    <>
       <div style={{ display: 'flex', height: '100%' }}>
        <ProSidebarProvider>
      <Sidebar>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
        </div>
        <Menu>
          <MenuItem icon={<BackpackIcon />} component={<Link to="/mycourse" />}> Current Course</MenuItem>
          <MenuItem icon={<LiveTvIcon />} component={<Link to="/live" />}> Enrolled Live</MenuItem>
          <MenuItem icon={<ExitToAppIcon />} component={<Link to="/" />}> Back to Main Page</MenuItem>
        </Menu>
      </Sidebar>
      </ProSidebarProvider>
    <Box sx={{ width: 'auto',mt: 4, mb: 4  }} maxWidth="lg">
    <Grid container sx={{ p: 2 }}> 
      <Typography variant="h4">Upcoming Live</Typography>
    </Grid>
    <Grid container sx={{ p: 2 }}> 
    <Typography variant='h5'>{timecount()}</Typography>
    </Grid>
    </Box>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div>Real Time course</div>
                <div>Teacher: Demetrius Patrick</div>
                <div>Date: 2023/05/03 (Wed)</div>
                <div>Time: 2:30 - 3:30</div>
                <a href={"zoommtg://zoom.us/join?confno=8529015944&pwd=&uname=PeterLam31935"}>Enter Zoom</a>
                </Paper>
              </Grid> 
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div>Real Time course</div>
                <div>Teacher: Demetrius Patrick</div>
                <div>Date: 2023/05/10 (Wed)</div>
                <div>Time: 2:30 - 3:30</div>
                <a href={"zoommtg://zoom.us/join?confno=8529015944&pwd=&uname=PeterLam31935"}>Enter Zoom</a>
                </Paper>
              </Grid>  
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div>Real Time course</div>
                <div>Teacher: Demetrius Patrick</div>
                <div>Date: 2023/05/17 (Wed)</div>
                <div>Time: 2:30 - 3:30</div>
                <a href={"zoommtg://zoom.us/join?confno=8529015944&pwd=&uname=PeterLam31935"}>Enter Zoom</a>
                </Paper>
              </Grid>  
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div>Real Time course</div>
                <div>Teacher: Demetrius Patrick</div>
                <div>Date: 2023/05/24 (Wed)</div>
                <div>Time: 2:30 - 3:30</div>
                <a href={"zoommtg://zoom.us/join?confno=8529015944&pwd=&uname=PeterLam31935"}>Enter Zoom</a>
                </Paper>
              </Grid>       
        </Grid>        
    </Container>
    </div>
    </>
  )
}
