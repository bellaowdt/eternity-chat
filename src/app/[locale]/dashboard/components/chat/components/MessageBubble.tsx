import { useAppContext } from '@/hooks/useAppContext';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import ChatIconToolbar from './ChatIconToolbar';
import {
  ChatCardDirectionEnum,
  ChatMessageTypeEnum,
  ChatUserTypeEnum,
} from '@/services/chat/types';

interface MessageBubbleProps {
  message: string;
  time: string;
  bubbleColor?: string;
  bubbleTextColor?: string;
  tailPosition?: ChatCardDirectionEnum;
  sender: ChatUserTypeEnum;
  type?: ChatMessageTypeEnum;
}

const MessageBubble: FC<MessageBubbleProps> = ({
  message,
  time,
  bubbleColor = '#f0f0f0',
  bubbleTextColor = 'common.black',
  tailPosition = ChatCardDirectionEnum.LEFT,
  sender,
  type = ChatMessageTypeEnum.CURRENT,
}) => {
  const { isMobile } = useAppContext();
  const isLeft = tailPosition === ChatCardDirectionEnum.LEFT;
  const isSystem = sender === ChatUserTypeEnum.SYSTEM;
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: isSystem ? 'flex-end' : 'flex-start',
          alignItems: 'flex-end',
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            backgroundColor: bubbleColor,
            color: bubbleTextColor,
            borderRadius: isLeft ? '18px 18px 18px 6px' : '18px 18px 6px 18px',
            paddingY: 1,
            paddingX: 2,
            maxWidth: isMobile ? '100%' : '75%',
            minWidth: '40%',
          }}
        >
          {/* SVG Tail */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              [isLeft ? 'left' : 'right']: -8,
              width: 12,
              height: 12,
              overflow: 'hidden',
              zIndex: 0,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  isLeft
                    ? 'M0,12 C0,6 6,0 12,0 L12,12 Z'
                    : 'M12,12 C12,6 6,0 0,0 L0,12 Z'
                }
                fill={bubbleColor}
              />
            </svg>
          </Box>
          <Typography variant="body1" sx={{ position: 'relative', zIndex: 1 }}>
            {message}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'right',
              color: '#999',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
      {type === 'current' && <ChatIconToolbar />}
    </Box>
  );
};

export default MessageBubble;
