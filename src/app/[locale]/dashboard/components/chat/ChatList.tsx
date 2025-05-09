import React from 'react';
import { Box } from '@mui/material';
import MessageBubble from './MessageBubble';
import FeedbackCard from './FeedbackCard';
import ChatInput from './ChatInput';

const mockChatMessages = [
  { id: 1, sender: 'user', message: 'Hi there!', time: '10:00 AM' },
  {
    id: 2,
    sender: 'system',
    message: 'Hello! How can I assist you today?',
    time: '10:01 AM',
  },
  {
    id: 3,
    sender: 'user',
    message: 'I’m having trouble with my account login.',
    time: '10:02 AM',
  },
  {
    id: 4,
    sender: 'system',
    message: 'Can you tell me what error you’re seeing?',
    time: '10:03 AM',
  },
];

const ChatList = () => {
  return (
    <Box p={2}>
      {mockChatMessages.map(({ id, sender, message, time }) => (
        <MessageBubble
          key={id}
          message={message}
          time={time}
          sender={sender as 'user' | 'system'}
          bubbleColor={sender === 'user' ? '#f0f0f0' : '#6C6C6C'}
          bubbleTextColor={sender === 'user' ? 'common.black' : 'common.white'}
          tailPosition={sender === 'user' ? 'left' : 'right'}
        />
      ))}

      <FeedbackCard />
      <ChatInput />
    </Box>
  );
};

export default ChatList;
