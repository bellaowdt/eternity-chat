import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface MessageBubbleProps {
  message: string;
  time: string;
  bubbleColor?: string;
  tailPosition?: 'left' | 'right';
  sender: 'user' | 'system';
}

const MessageBubble: FC<MessageBubbleProps> = ({
  message,
  time,
  bubbleColor = '#f0f0f0',
  tailPosition = 'left',
  sender,
}) => {
  const isLeft = tailPosition === 'left';
  const isSystem = sender === 'system';
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSystem ? 'flex-end' : 'flex-start',
        alignItems: 'flex-end',
        marginBottom: 1,
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundColor: bubbleColor,
          borderRadius: isLeft ? '18px 18px 18px 6px' : '18px 18px 6px 18px',
          padding: 2,
          maxWidth: '75%',
          minWidth: '200px',
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
            fontSize: '12px',
            marginTop: '6px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageBubble;
