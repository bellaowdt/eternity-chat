import {
  ChatCardDirectionEnum,
  ChatUserTypeEnum,
  IChatHistoryItem,
} from '@/services/chat/types';
import { Box, useTheme } from '@mui/material';
import { FC, Fragment } from 'react';
import MessageBubble from './MessageBubble';
import FeedbackCard from './feedback/FeedbackCard';

interface ChatItemsProps {
  items: IChatHistoryItem[];
}

const ChatItems: FC<ChatItemsProps> = ({ items }) => {
  const theme = useTheme();
  return (
    <Box p={2}>
      {items?.map((item, index) => {
        const { message, response, timestamp, isLoading, isError, type } = item;
        return (
          <Fragment key={timestamp}>
            <MessageBubble
              key={index}
              message={message}
              time={timestamp}
              sender={ChatUserTypeEnum.USER}
              bubbleColor={theme.palette.common.white}
              bubbleTextColor="common.black"
              tailPosition={ChatCardDirectionEnum.LEFT}
              isError={isError}
            />

            <MessageBubble
              key={++index}
              message={response}
              time={timestamp}
              sender={ChatUserTypeEnum.SYSTEM}
              bubbleColor={theme.palette.primary.main}
              bubbleTextColor="common.white"
              tailPosition={ChatCardDirectionEnum.RIGHT}
              type={type}
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
