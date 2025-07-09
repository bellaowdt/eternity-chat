'use client';

import React, { FC, useState } from 'react';
import {
  Typography,
  Chip,
  TextField,
  Button,
  IconButton,
  Stack,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IFeedback } from '@/services/chat/types';
import { useTranslations } from 'next-intl';

const reasons = [
  'Don’t like the style',
  'Not Factually Correct',
  'Didn’t Fully follow instructions',
  'Offensive / Unsafe',
  'Poorly Formatted',
  'Wrong Language',
  'Other',
];

interface FeedbackCardProps {
  onClose: VoidFunction;
  onSubmitFeedback: (data: IFeedback) => void;
}

const FeedbackCard: FC<FeedbackCardProps> = ({ onClose, onSubmitFeedback }) => {
  const t = useTranslations();
  const [selected, setSelected] = useState<string[]>([]);
  const [comments, setComments] = useState('');

  const toggleChip = (reason: string) => {
    setSelected((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason],
    );
  };

  const handleSubmit = () => {
    onSubmitFeedback({
      reasons: [],
      message: '',
    });
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 1,
        maxWidth: 600,
        position: 'relative',
        bgcolor: 'common.white',
      }}
    >
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" mb={4}>
        Let me know which of these answers resonate with you. 😊
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
        {reasons?.map((reason) => (
          <Chip
            key={reason}
            label={reason}
            onClick={() => toggleChip(reason)}
            variant={selected.includes(reason) ? 'filled' : 'outlined'}
            color={selected.includes(reason) ? 'primary' : 'default'}
          />
        ))}
      </Stack>

      <TextField
        fullWidth
        multiline
        minRows={3}
        placeholder="(Optional) Feel free to add specific details."
        variant="outlined"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={handleSubmit}>
        {t('common.buttons.submit')}
      </Button>
    </Paper>
  );
};

export default FeedbackCard;
