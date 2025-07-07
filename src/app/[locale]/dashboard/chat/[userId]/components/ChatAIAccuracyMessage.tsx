import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const ChatAIAccuracyMessage = () => {
  const t = useTranslations();
  return (
    <Typography
      variant="body1"
      fontWeight={400}
      my={2}
      color="text.secondary"
      textAlign="center"
      px={2}
    >
      {t('pages.chat.accuracyMsg')}
    </Typography>
  );
};

export default ChatAIAccuracyMessage;
