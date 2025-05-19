import { Box, Skeleton } from '@mui/material';
import { FC } from 'react';
import { useAppContext } from '@/hooks/useAppContext';

interface MessageBubbleSkeletonProps {
  isLeft?: boolean;
}

const MessageBubbleSkeleton: FC<MessageBubbleSkeletonProps> = ({
  isLeft = true,
}) => {
  const { isMobile } = useAppContext();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#f0f0f0',
          borderRadius: isLeft ? '18px 18px 18px 6px' : '18px 18px 6px 18px',
          paddingY: 1.5,
          paddingX: 2,
          maxWidth: isMobile ? '100%' : '75%',
          minWidth: '40%',
        }}
      >
        <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="40%" height={14} />
      </Box>
    </Box>
  );
};

export default MessageBubbleSkeleton;
