'use client';

import CopyToClipboard from '@/components/CopyToClipboard';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TuneIcon from '@mui/icons-material/Tune';
import { IconButton, Stack, Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import VoicePlayerManager from './VoicePlayerManager';

interface ChatIconToolbarProps {
  value?: string;
}

const ChatIconToolbar: FC<ChatIconToolbarProps> = ({ value }) => {
  const t = useTranslations();

  return (
    <Stack direction="row" alignItems="center">
      <VoicePlayerManager value={value} />
      <Tooltip title={t('pages.chat.toolbarIcons.goodResponse')} arrow>
        <IconButton aria-label="like">
          <ThumbUpOffAltIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('pages.chat.toolbarIcons.badResponse')} arrow>
        <IconButton aria-label="dislike">
          <ThumbDownOffAltIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title={t('pages.chat.toolbarIcons.copy')} arrow>
        <CopyToClipboard value={value || ''} />
      </Tooltip>

      <IconButton aria-label="settings">
        <TuneIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="more">
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default ChatIconToolbar;
