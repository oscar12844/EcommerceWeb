import './App.css';
import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import BackpackIcon from '@mui/icons-material/Backpack';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Home from './components/Home';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NoMatch from './components/NoMatch';
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
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
        </div>
        <Menu>
          <MenuItem icon={<BackpackIcon />} component={<Link to="/" />}> Current Course</MenuItem>
          <MenuItem icon={<LiveTvIcon />} component={<Link to="live" />}> Enrolled Live</MenuItem>
          <MenuItem icon={<ExitToAppIcon />} component={<Link to="/back" />}> Back to Main Page</MenuItem>
        </Menu>
      </Sidebar>
      <main>
          <Routes>
            <Route path="/" element={<Home item={subject} />} />
            <Route path="live" element={<EnrolledLive />} />
            <Route path=":course" element={<Course item={subject}  />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
      </main>
    </div>
    
  );
}

export default App;
