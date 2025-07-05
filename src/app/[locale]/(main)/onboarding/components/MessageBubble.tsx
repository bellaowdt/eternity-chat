import { useAppContext } from '@/hooks/useAppContext';
import { languages, Locale } from '@/navigation';
import { ChatCardDirectionEnum } from '@/services/chat/types';
import { Box, Typography } from '@mui/material';
import { useLocale } from 'next-intl';
import { FC, ReactNode } from 'react';

interface MessageBubbleProps {
  children?: ReactNode;
  time: string;
  bubbleColor?: string;
  bubbleTextColor?: string;
  bubbleTimeColor?: string;
  tailPosition?: ChatCardDirectionEnum;
  bubblePadding?: number;
  timerPadding?: number;
}

const MessageBubble: FC<MessageBubbleProps> = ({
  children,
  time,
  bubbleColor = '#f0f0f0',
  bubbleTextColor = 'common.black',
  bubbleTimeColor = 'common.white',
  tailPosition = ChatCardDirectionEnum.LEFT,
  bubblePadding = 3,
  timerPadding = bubblePadding,
}) => {
  const { isMobile } = useAppContext();
  const isLeft = tailPosition === ChatCardDirectionEnum.LEFT;
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginBottom: 2,
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundColor: bubbleColor,
          color: bubbleTextColor,
          borderRadius: isLeft ? '35px 35px 35px 6px' : '35px 35px 6px 35px',
          padding: bubblePadding,
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

        <Box sx={{ position: 'relative', zIndex: 1 }}>{children}</Box>

        <Typography
          variant="caption"
          sx={{
            textAlign: 'right',
            color: bubbleTimeColor ?? bubbleTimeColor,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 1,
            zIndex: 1,
            pt: timerPadding ? timerPadding : bubblePadding,
          }}
        >
          {new Date(time).toLocaleTimeString(locale, {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageBubble;
