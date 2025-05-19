'use client';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';

const AppBarComponent = () => {
  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box display="flex" alignItems="center">
        <Avatar
          alt="John Doe"
          src="/path-to-profile.jpg"
          sx={{ marginRight: 1 }}
        />
        <Typography variant="subtitle1">John Doe</Typography>
      </Box>

      <Box>
        <IconButton>
          <PhoneIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default AppBarComponent;
