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
  {
    id: 5,
    sender: 'user',
    message: 'It says "Invalid credentials".',
    time: '10:04 AM',
  },
  {
    id: 6,
    sender: 'system',
    message: 'Try resetting your password.',
    time: '10:05 AM',
  },
  { id: 7, sender: 'user', message: 'Okay, I’ll try that.', time: '10:06 AM' },
  {
    id: 8,
    sender: 'system',
    message: 'Let me know if it works.',
    time: '10:07 AM',
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
