import {
  ChatCardDirectionEnum,
  ChatMessageTypeEnum,
  ChatUserTypeEnum,
  IChatHistoryItem,
} from '@/services/chat/types';
import { Box } from '@mui/material';
import { FC, Fragment } from 'react';
import MessageBubble from './MessageBubble';

interface ChatItemsProps {
  items: IChatHistoryItem[];
}

const ChatItems: FC<ChatItemsProps> = ({ items }) => {
  return (
    <Box p={2}>
      {items?.map((item, index) => {
        const { message, response, timestamp, isLoading, isError } = item;
        return (
          <Fragment key={timestamp}>
            <MessageBubble
              key={index}
              message={message}
              time={timestamp}
              sender={ChatUserTypeEnum.USER}
              bubbleColor="#f0f0f0"
              bubbleTextColor="common.black"
              tailPosition={ChatCardDirectionEnum.LEFT}
              type={ChatMessageTypeEnum.HISTORY}
              isError={isError}
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
              isLoading={isLoading}
              isError={isError}
            />
          </Fragment>
        );
      })}

      {/* <FeedbackCard /> */}
    </Box>
  );
};

export default ChatItems;
