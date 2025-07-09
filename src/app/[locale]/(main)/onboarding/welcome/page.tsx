'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import CheckClubRulesForm from '../components/CheckRulesForm';
import { useLocale } from 'next-intl';
import { useAppContext } from '@/hooks/useAppContext';

const WelcomeAboard = () => {
  const locale = useLocale();
  const { isMobile } = useAppContext();

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
        <Typography variant={isMobile ? 'h2' : 'h1'} fontWeight={700} mb={2}>
          Let’s Begin with
          <br />
          Your{' '}
          <Box component="span" color="primary.main">
            Loved One’s Story
          </Box>
        </Typography>
        <Typography variant="h4" m={2} className={`latoStyleRegular-${locale}`}>
          To create a meaningful experience together, please <br />
          share some details about your loved one to help us <br />
          craft personalized and heartfelt interactions.
        </Typography>
        <Typography variant="h4" m={2} className={`latoStyleRegular-${locale}`}>
          Feel free to skip this question if it’s too personal.
        </Typography>
      </Box>

      <CheckClubRulesForm />
    </Box>
  );
};

export default WelcomeAboard;
