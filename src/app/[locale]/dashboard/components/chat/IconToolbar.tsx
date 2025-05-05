'use client';

import React from 'react';
import { Stack, IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TuneIcon from '@mui/icons-material/Tune';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const IconToolbar: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center">
      <IconButton aria-label="sound">
        <VolumeUpIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="like">
        <ThumbUpOffAltIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="dislike">
        <ThumbDownOffAltIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="copy">
        <ContentCopyIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="settings">
        <TuneIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="more">
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default IconToolbar;
