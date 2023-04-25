import './dashboard.css';
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter, Navigate } from "react-router-dom";
import BackpackIcon from '@mui/icons-material/Backpack';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Home from './components/Home';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import EnrolledLive from './components/EnrolledLive';
import logo from './assets/logo.png'
import Course from './components/Course';

function App() {

  const [selected, setSelected] = React.useState(0);
  const [subject, setSubject] = React.useState('Math');

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (

    <ProSidebarProvider>
    <div style={{ display: 'flex', height: '100%' }}>
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
      <main>
          <Routes path="/" element={<Home item={subject} />}>
              <Route index element={<Home />} />
              <Route path="/mycourse" element={<Course item={subject} />} />
          </Routes>
      </main>
    </div>
    </ProSidebarProvider>

  );
}

export default App;
