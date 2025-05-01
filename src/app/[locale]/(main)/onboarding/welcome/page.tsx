'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import CheckClubRulesForm from '../components/CheckRulesForm';

const WelcomeAboard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      px={2}
      py={4}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        maxWidth="sm"
        width="100%"
        flexGrow={1}
        justifyContent="center"
        mb={4}
      >
        <Typography variant="h4" mb={2}>
          Let’s Begin with Your Loved
          <br />
          One’s Story
        </Typography>
        <Typography variant="body1" mb={2}>
          To create a meaningful experience together, <br />
          please share some details about your loved one to <br />
          help us craft personalized and heartfelt interactions.
        </Typography>
        <Typography variant="body2" mb={2} color="info.main">
          Feel free to skip this question if it’s too personal.
        </Typography>
      </Box>

      <CheckClubRulesForm />
    </Box>
  );
};

export default WelcomeAboard;
