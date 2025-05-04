import CustomSkeleton from '@/components/CustomSkeleton';
import { Avatar, Box, Typography, Stack } from '@mui/material';

const UserDetails = () => {
  //const { data, isFetching } = useGetProfile();
  const data = {
    fullName: 'Bahar Keshavarz',
    avatar: '/assets/images/users/avatar-4.png',
    email: 'bahar.keshavarzc@gmail.com',
  };
  const isFetching = false;
  return (
    <Box gap={2} display="flex" flexGrow={1} justifyContent="center">
      <Avatar alt="" src={data?.avatar} sx={{ width: 32, height: 32, ml: 2 }} />
      <Stack
        sx={{
          '& span': {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: 'calc(100% - 12px)',
          },
          flexGrow: 1,
        }}
      >
        <CustomSkeleton isLoading={isFetching}>
          <Typography variant="caption" fontWeight={600}>
            {data?.fullName}
          </Typography>
        </CustomSkeleton>
        <CustomSkeleton isLoading={isFetching}>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
            }}
          >
            {data?.email}
          </Typography>
        </CustomSkeleton>
      </Stack>
    </Box>
  );
};

export default UserDetails;
