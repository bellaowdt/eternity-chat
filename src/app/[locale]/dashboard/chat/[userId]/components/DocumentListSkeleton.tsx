import { Box, Skeleton } from '@mui/material';

const DocumentListSkeleton = () => {
  return (
    <Box gap={1} p={1} display="flex" justifyContent="space-between">
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        animation="wave"
        sx={{
          borderRadius: '50%',
        }}
      />
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        <Skeleton width="60%" height={40} />
        <Skeleton width="5%" height={40} />
      </Box>
    </Box>
  );
};

export default DocumentListSkeleton;
