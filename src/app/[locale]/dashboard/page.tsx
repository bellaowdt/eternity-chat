'use client';

import { useAppContext } from '@/hooks/useAppContext';
import { Box, Container } from '@mui/material';
import { useState } from 'react';
import MobileSidebar from './components/sidebar/MobileSidebar';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar';
import ChatList from './components/chat/components/ChatList';
import ChatInput from './components/chat/components/ChatInput';
import ChatDrawer from './components/chat/components/ChatDrawer';

const Home = () => {
  const { isMobile } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const toggleDrawer = () => setCollapsed(!collapsed);
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      {isMobile ? (
        <MobileSidebar toggleDrawer={toggleDrawer} collapsed={collapsed} />
      ) : (
        <Sidebar collapsed={collapsed} />
      )}
      <Box flexGrow={1}>
        <Topbar collapsed={collapsed} toggleCollapsed={toggleDrawer} />
        <Box display="flex" height="100%">
          <ChatDrawer />
          <Container maxWidth="md">
            <ChatList />
            <ChatInput />
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
