'use client';

import { useAppContext } from '@/hooks/useAppContext';
import { Box, Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import MobileSidebar from './components/sidebar/MobileSidebar';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar';
import ChatList from './components/chat/components/ChatList';
import ChatInput from './components/chat/components/ChatInput';
import ChatDrawer from './components/chat/components/ChatDrawer';
import {
  SAMPLE_CHAT_USER_ID,
  SAMPLE_CHAT_USER_PERSONALITY,
} from '@/constants/general';
import useGetUserChatsHistory from './components/chat/hooks/useGetUserChatsHistory';
import MessageBubbleSkeleton from './components/chat/components/MessageBubbleSkeleton';
import { IChatHistoryResponse } from '@/services/chat/types';

const Home = () => {
  const { isMobile } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const toggleDrawer = () => setCollapsed(!collapsed);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const [chatMessages, setChatMessages] = useState<IChatHistoryResponse[]>([]);
  const { data: chatHistoryList, isPending } = useGetUserChatsHistory({
    user_id: SAMPLE_CHAT_USER_ID,
    params: {
      user_id: SAMPLE_CHAT_USER_ID,
      personality_name: SAMPLE_CHAT_USER_PERSONALITY,
    },
  });

  useEffect(() => {
    if (!isPending && chatHistoryList?.data) {
      setChatMessages(chatHistoryList.data);
    }
  }, [isPending, chatHistoryList]);

  useEffect(() => {
    if (!isPending) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isPending]);

  const onAddNewChat = (message: IChatHistoryResponse) => {
    setChatMessages((prev) => [...prev, message]);
  };

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

      <Box
        flexGrow={1}
        // sx={{
        //   overflow: 'hidden',
        // }}
      >
        <Topbar collapsed={collapsed} toggleCollapsed={toggleDrawer} />

        <Box display="flex" height="100%" sx={{ position: 'relative' }}>
          <ChatDrawer />

          <Container
            maxWidth="md"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              // overflow: 'hidden',
            }}
          >
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
              {isPending ? (
                <Box pt={2}>
                  {new Array(4).fill(1).map((_i, index) => (
                    <MessageBubbleSkeleton
                      key={index.toString()}
                      isLeft={index % 2 === 0}
                    />
                  ))}
                </Box>
              ) : (
                <>
                  <ChatList chatMessages={chatMessages} />
                  <div ref={chatEndRef} />
                </>
              )}
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
              m={2}
            >
              <ChatInput onNewChat={onAddNewChat} />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
