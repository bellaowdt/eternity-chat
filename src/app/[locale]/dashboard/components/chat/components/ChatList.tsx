import {
  SAMPLE_CHAT_USER_ID,
  SAMPLE_CHAT_USER_PERSONALITY,
} from '@/constants/general';
import {
  ChatCardDirectionEnum,
  ChatMessageTypeEnum,
  ChatUserTypeEnum,
  IChatHistoryResponse,
} from '@/services/chat/types';
import { Box } from '@mui/material';
import useGetUserChatsHistory from '../hooks/useGetUserChatsHistory';
// import FeedbackCard from './FeedbackCard';
import MessageBubble from './MessageBubble';

const ChatList = () => {
  const { data: chatHistoryList } = useGetUserChatsHistory({
    user_id: SAMPLE_CHAT_USER_ID,
    params: {
      user_id: SAMPLE_CHAT_USER_ID,
      personality_name: SAMPLE_CHAT_USER_PERSONALITY,
    },
  });

  console.log('chat his', chatHistoryList);

  return (
    <Box p={2}>
      {chatHistoryList?.data?.map(
        (chat: IChatHistoryResponse, index: number) => {
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
        },
      )}

      {/* <FeedbackCard /> */}
    </Box>
  );
};

export default ChatList;
