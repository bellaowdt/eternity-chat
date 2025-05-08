import { Delete } from '@mui/icons-material';
import {
  Box,
  Typography,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import React from 'react';

const GeneralSetting = () => {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle2">Dark Theme</Typography>
        <Switch />
      </Box>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Language</InputLabel>
        <Select label="Language">
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
      </FormControl>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography>Delete All Chats</Typography>
        <IconButton color="error">
          <Delete />
        </IconButton>
      </Box>

      <Button variant="contained" fullWidth sx={{ mt: 3 }}>
        Save Changes
      </Button>
    </>
  );
};

export default GeneralSetting;
