'use client';

import React, { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { IFeedback } from '@/services/chat/types';

const FeedbackWrapper = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <FeedbackCard
          onClose={() => setOpen(false)}
          onSubmitFeedback={(data: IFeedback) => {
            console.log('Feedback submitted:', data);
            setOpen(false);
          }}
        />
      )}

      {!open && (
        <Button variant="text" onClick={() => setOpen(true)}>
          {t('pages.chat.feedback.feedbackAgain')}
        </Button>
      )}
    </>
  );
};

export default FeedbackWrapper;
