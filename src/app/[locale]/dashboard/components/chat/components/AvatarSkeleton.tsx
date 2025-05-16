import { Skeleton } from '@mui/material';
import { FC } from 'react';

interface AvatarSkeletonProps {
  count?: number;
}

const AvatarSkeleton: FC<AvatarSkeletonProps> = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          variant="circular"
          width={60}
          height={60}
          animation="wave"
          sx={{
            borderRadius: '50%',
          }}
        />
      ))}
    </>
  );
};

export default AvatarSkeleton;
