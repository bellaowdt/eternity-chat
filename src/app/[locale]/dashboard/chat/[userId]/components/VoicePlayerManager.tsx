import VoicePlayer from '@/components/VoicePlayer';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import useAudioPlayer from '../hooks/useAudioPlayer';

interface VoicePlayerManagerProps {
  value?: string;
}
const VoicePlayerManager: FC<VoicePlayerManagerProps> = ({ value }) => {
  const t = useTranslations();
  const { onTexttoSpeech, audioUrl, isPending } = useAudioPlayer({
    text: value || '',
  });

  return (
    <>
      <Tooltip title={t('pages.chat.toolbarIcons.readAloud')} arrow>
        <IconButton aria-label="sound" onClick={onTexttoSpeech}>
          {isPending ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <VolumeUpIcon fontSize="small" />
          )}
        </IconButton>
      </Tooltip>

      {audioUrl && <VoicePlayer voiceUrl={audioUrl} />}
    </>
  );
};

export default VoicePlayerManager;
