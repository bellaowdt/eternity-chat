'use client';

import { useAppContext } from '@/hooks/useAppContext';
import { Box, Container, Stack } from '@mui/material';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessagesContainer from './components/MessagesContainer';
import MobileSidebar from '../../components/sidebar/MobileSidebar';
import ChatDrawer from './components/ChatDrawer';
import ChatInput from './components/ChatInput';
import TopBar from '../../components/TopBar';
import NotificationBar from '../../components/NotificationBar';

const ChatPage = () => {
  const { isMobile } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const toggleDrawer = () => setCollapsed(!collapsed);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {isMobile ? (
        <MobileSidebar toggleDrawer={toggleDrawer} collapsed={collapsed} />
      ) : (
        <Sidebar collapsed={collapsed} />
      )}

      <Stack minHeight={0} flex={1}>
        <TopBar collapsed={collapsed} toggleCollapsed={toggleDrawer} />
        <Box display="flex" flex={1} minHeight={0} position="relative">
          <ChatDrawer />
          <Box flex={1} display="flex" flexDirection="column">
            <NotificationBar />
            <Container
              maxWidth="md"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minHeight: 0,
              }}
            >
              <MessagesContainer />
              <ChatInput />
            </Container>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChatPage;
