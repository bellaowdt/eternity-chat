import useGenderList from '@/app/[locale]/(main)/hooks/useGenderList';
import useGetPersonalities from '@/app/[locale]/(main)/hooks/useGetPersonalities';
import { SAMPLE_CHAT_USER_ID } from '@/constants/general';
import { GenderEnum } from '@/services/common/types';
import { Avatar, Box, Stack, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import AddPersonalityDialog from './AddPersonalityDialog';
import AvatarSkeleton from './AvatarSkeleton';

const ChatDrawer = () => {
  const [addPersonalityDialog, setAddPersonalityDialog] = useState(false);

  const onToggleAddDialog = () => {
    setAddPersonalityDialog((prevState) => !prevState);
  };

  const { data, isFetching } = useGetPersonalities({
    user_id: SAMPLE_CHAT_USER_ID,
  });
  const genderMapper = useGenderList();

  const users = data?.personalities.map((personality) => ({
    title: personality.name,
    icon: genderMapper[personality.details.gender || GenderEnum.Male].icon,
  }));

  return (
    <>
      <Box
        width={80}
        p={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
        }}
      >
        <Stack spacing={3}>
          {isFetching ? (
            <AvatarSkeleton count={3} />
          ) : (
            <>
              {users?.map((user, index) => (
                <Tooltip key={index} title={user.title || ''} arrow>
                  <Avatar
                    alt={user.title}
                    src={(user.icon as string) || ''}
                    sx={{ width: 60, height: 60 }}
                  />
                </Tooltip>
              ))}
            </>
          )}
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
          onClick={onToggleAddDialog}
        >
          <Typography fontSize={24} color="common.white">
            +
          </Typography>
        </Box>
      </Box>

      <AddPersonalityDialog
        open={addPersonalityDialog}
        onClose={onToggleAddDialog}
      />
    </>
  );
};

export default ChatDrawer;
