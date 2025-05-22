'use client';

import { FC } from 'react';
import { Stack, IconButton, Tooltip } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import TuneIcon from '@mui/icons-material/Tune';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslations } from 'next-intl';
import CopyToClipboard from '@/components/CopyToClipboard';

interface ChatIconToolbarProps {
  value?: string;
}

const ChatIconToolbar: FC<ChatIconToolbarProps> = ({ value }) => {
  const t = useTranslations();
  return (
    <Stack direction="row" alignItems="center">
      <Tooltip title={t('pages.chat.toolbarIcons.readAloud')} arrow>
        <IconButton aria-label="sound">
          <VolumeUpIcon fontSize="small" />
        </IconButton>
      </Tooltip>

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
