import {
  ChatCardDirectionEnum,
  ChatMessageTypeEnum,
  ChatUserTypeEnum,
  IChatHistoryResponse,
} from '@/services/chat/types';
import { Box } from '@mui/material';
// import FeedbackCard from './FeedbackCard';
import MessageBubble from './MessageBubble';
import { FC } from 'react';

interface ChatListProps {
  chatMessages: IChatHistoryResponse[];
}

const ChatList: FC<ChatListProps> = ({ chatMessages }) => {
  return (
    <Box p={2}>
      {chatMessages?.map((chat: IChatHistoryResponse, index: number) => {
        const { message, response, timestamp } = chat;
        return (
          <>
            <MessageBubble
              key={index}
              message={message}
              time={timestamp}
              sender={ChatUserTypeEnum.USER}
              bubbleColor="#f0f0f0"
              bubbleTextColor="common.black"
              tailPosition={ChatCardDirectionEnum.LEFT}
              type={ChatMessageTypeEnum.HISTORY}
            />
            <MessageBubble
              key={++index}
              message={response}
              time={timestamp}
              sender={ChatUserTypeEnum.SYSTEM}
              bubbleColor="#6C6C6C"
              bubbleTextColor="common.white"
              tailPosition={ChatCardDirectionEnum.RIGHT}
              type={ChatMessageTypeEnum.HISTORY}
            />
          </>
        );
      })}

      {/* <FeedbackCard /> */}
    </Box>
  );
};

export default ChatList;
