import { DEFAULt_AVATAR_IMAGE } from '@/constants/general';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';

const ChatDrawer = () => {
  const users = [
    {
      title: 'Allen',
      icon: DEFAULt_AVATAR_IMAGE,
    },
    {
      title: 'Allen',
      icon: '/assets/images/users/avatar-4.png',
    },
    {
      title: 'Allen',
      icon: '/assets/images/users/avatar-3.png',
    },
    {
      title: 'Allen',
      icon: '/assets/images/users/avatar-1.png',
    },
  ];
  return (
    <Box
      width={80}
      px={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      sx={{
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <Stack spacing={3}>
        {users.map((user, index) => (
          <Avatar
            key={index}
            alt={user.title}
            src={user.icon}
            sx={{ width: 60, height: 60 }}
          />
        ))}
      </Stack>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="100%"
        width={60}
        height={60}
        bgcolor="common.black"
        sx={{ cursor: 'pointer' }}
        onClick={() => ''}
      >
        <Typography fontSize={24} color="common.white">
          +
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatDrawer;
