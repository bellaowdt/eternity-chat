import CustomSkeleton from '@/components/CustomSkeleton';
import { Avatar, Stack, Typography } from '@mui/material';

const UserDetails = () => {
  //const { data, isFetching } = useGetProfile();
  const data = {
    fullName: 'Bahar Keshavarz',
    avatar: '',
    email: 'bahar.keshavarzc@gmail.com',
  };
  const isFetching = false;
  return (
    <Stack spacing={1} direction="row" flexGrow={1}>
      <Avatar alt="profile user" src={data?.avatar} size="sm" />
      <Stack
        sx={{
          '& span': {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: 'calc(100% - 32px - 16px)',
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
    </Stack>
  );
};

export default UserDetails;
