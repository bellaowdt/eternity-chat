import { useAppContext } from '@/hooks/useAppContext';
import { languages, Locale } from '@/navigation';
import {
  ChatCardDirectionEnum,
  ChatMessageTypeEnum,
  ChatUserTypeEnum,
} from '@/services/chat/types';
import { ErrorOutlineOutlined } from '@mui/icons-material';
import { Box, Collapse, Skeleton, Typography } from '@mui/material';
import { useLocale } from 'next-intl';
import { FC, memo } from 'react';
import ChatIconToolbar from './ChatIconToolbar';

interface MessageBubbleProps {
  message: string | null;
  time: string;
  bubbleColor?: string;
  bubbleTextColor?: string;
  tailPosition?: ChatCardDirectionEnum;
  sender: ChatUserTypeEnum;
  type?: ChatMessageTypeEnum;
  isLoading?: boolean;
  isError?: boolean;
}

const MessageBubble: FC<MessageBubbleProps> = ({
  message,
  time,
  bubbleColor = '#f0f0f0',
  bubbleTextColor = 'common.black',
  tailPosition = ChatCardDirectionEnum.LEFT,
  sender,
  type = ChatMessageTypeEnum.CURRENT,
  isLoading,
  isError,
}) => {
  const { isMobile } = useAppContext();
  const isLeft = tailPosition === ChatCardDirectionEnum.LEFT;
  const isSystem = sender === ChatUserTypeEnum.SYSTEM;

  const locale = useLocale();
  const direction = languages[locale as Locale]?.direction ?? 'ltr';

  let tailPos = '';
  if (direction === 'ltr') {
    // For Left-to-Right direction
    tailPos = isLeft
      ? 'M0,12 C0,6 6,0 12,0 L12,12 Z' // Tail for left-side
      : 'M12,12 C12,6 6,0 0,0 L0,12 Z'; // Tail for right-side
  } else if (direction === 'rtl') {
    // For Right-to-Left direction
    tailPos = isLeft
      ? 'M12,12 C12,6 6,0 0,0 L0,12 Z' // Tail for left-side
      : 'M0,12 C0,6 6,0 12,0 L12,12 Z'; // Tail for right-side
  }
  if (direction === 'ltr') {
    // For Left-to-Right direction
    tailPos = isLeft
      ? 'M0,12 C0,6 6,0 12,0 L12,12 Z' // Tail for left-side
      : 'M12,12 C12,6 6,0 0,0 L0,12 Z'; // Tail for right-side
  } else if (direction === 'rtl') {
    // For Right-to-Left direction
    tailPos = isLeft
      ? 'M12,12 C12,6 6,0 0,0 L0,12 Z' // Tail for left-side
      : 'M0,12 C0,6 6,0 12,0 L12,12 Z'; // Tail for right-side
  }
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
              <path d={tailPos} fill={bubbleColor} />
            </svg>
          </Box>

          <Collapse
            in={isLoading}
            timeout={300}
            easing={{
              enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
              exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Skeleton
              variant="text"
              sx={{
                bgcolor: 'grey.400',
              }}
              width={'100%'}
              height={22}
            />
          </Collapse>

          <Collapse
            in={!isLoading}
            timeout={300}
            easing={{
              enter: 'cubic-bezier(0.4, 0, 0.2, 1)',
              exit: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Typography variant="body1">{message}</Typography>
          </Collapse>

          <Typography
            variant="caption"
            sx={{
              textAlign: 'right',
              color: '#999',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 1,
              zIndex: 1,
            }}
          >
            {isError && (
              <ErrorOutlineOutlined
                color="error"
                fontSize="small"
                sx={{
                  fontSize: '1rem',
                }}
              />
            )}
            {new Date(time).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              hour: 'numeric',
              minute: '2-digit',
            })}
          </Typography>
        </Box>
      </Box>
      {type === 'current' && <ChatIconToolbar />}
    </Box>
  );
};

export default memo(MessageBubble);
