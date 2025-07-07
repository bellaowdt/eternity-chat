'use client';

import { DEFAULT_DASHBOARD_ICONS } from '@/constants/general';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';

const AppBarComponent = () => {
  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box display="flex" alignItems="center">
        <Avatar
          alt="John Doe"
          src={`${DEFAULT_DASHBOARD_ICONS}/john-doe-avatar.png`}
          sx={{ marginRight: 1 }}
        />
        <Typography variant="subtitle1" fontWeight="bold">
          John Doe
        </Typography>
      </Box>

      <Box>
        <IconButton>
          <Image
            alt="Attachment"
            src={`${DEFAULT_DASHBOARD_ICONS}/phone.png`}
            width={24}
            height={24}
          />
        </IconButton>
        <IconButton>
          <SearchIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton>
          <MoreVertIcon sx={{ color: 'black' }} />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default AppBarComponent;
