import { Box, Typography } from '@mui/material';

interface MessageBubbleProps {
  message: string;
  time: string;
  bubbleColor?: string;
  sender: 'user' | 'system';
}

export default function MessageBubble({
  message,
  time,
  bubbleColor = '#f0f0f0',
  sender,
}: MessageBubbleProps) {
  const isSystem = sender === 'system';
  const isLeft = !isSystem; // user -> left, system -> right

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isSystem ? 'flex-end' : 'flex-start',
        marginBottom: '12px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          margin: '14px 0',
          width: 'fit-content',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            backgroundColor: bubbleColor,
            borderRadius: isLeft ? '18px 18px 18px 6px' : '18px 18px 6px 18px',
            padding: '12px 16px',
            maxWidth: '75%',
            width: 'fit-content',
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

          <Typography
            variant="body1"
            sx={{ fontSize: '16px', position: 'relative', zIndex: 1 }}
          >
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
    </Box>
  );
}
