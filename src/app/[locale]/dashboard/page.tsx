'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { useAppContext } from '@/hooks/useAppContext';
import MobileSidebar from './components/MobileSidebar';

const Home = () => {
  const { isMobile } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const toggleDrawer = () => setCollapsed(!collapsed);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      {isMobile ? (
        <MobileSidebar toggleDrawer={toggleDrawer} collapsed={collapsed} />
      ) : (
        <Sidebar collapsed={collapsed} />
      )}
      <Box flexGrow={1} component="main">
        <Topbar collapsed={collapsed} toggleCollapsed={toggleDrawer} />
        <Box
          display="flex"
          borderRadius={1}
          bgcolor="common.white"
          minHeight={600} //TODO
          px={{ xs: 2, sm: 3 }}
          mx={{ xs: 1, sm: 0 }}
        >
          main area
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
