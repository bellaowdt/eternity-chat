'use client';

import { FC, useState } from 'react';
import { Stack, IconButton, Tooltip, CircularProgress } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import TuneIcon from '@mui/icons-material/Tune';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslations } from 'next-intl';
import CopyToClipboard from '@/components/CopyToClipboard';
import { textToSpeech } from '@/services/chat';
import { useQuery } from '@tanstack/react-query';
import { ToneEnum } from '@/services/common/types';
import VoicePlayer from '@/components/VoicePlayer';

interface ChatIconToolbarProps {
  value?: string;
}

const ChatIconToolbar: FC<ChatIconToolbarProps> = ({ value }) => {
  const t = useTranslations();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const { data: speechData, isFetching } = useQuery({
    enabled: !!isSpeaking,
    queryKey: ['GET_FACEBOOK_URL'],
    queryFn: async () => {
      const { data } = await textToSpeech({
        payload: {
          text: value!,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.4,
            similarity_boost: 0.7,
            style: 1,
            use_speaker_boost: true,
          },
          generation_config: { emotion: ToneEnum.Happy, emotion_level: 3 },
        },
      });

      setIsSpeaking(false);
      return data;
    },
  });

  const onTexttoSpeech = () => {
    setIsSpeaking(true);
  };
  return (
    <Stack direction="row" alignItems="center">
      <Tooltip title={t('pages.chat.toolbarIcons.readAloud')} arrow>
        <IconButton aria-label="sound">
          {isFetching ? (
            <>
              <CircularProgress color="inherit" size={20} />
              <VoicePlayer voiceUrl={speechData as string} />
            </>
          ) : (
            <VolumeUpIcon fontSize="small" onClick={onTexttoSpeech} />
          )}
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
