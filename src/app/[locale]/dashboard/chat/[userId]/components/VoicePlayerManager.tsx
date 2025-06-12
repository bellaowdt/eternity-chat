import VoicePlayer from '@/components/VoicePlayer';
import { textToSpeech } from '@/services/chat';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface VoicePlayerManagerProps {
  value?: string;
}
const VoicePlayerManager: FC<VoicePlayerManagerProps> = ({ value }) => {
  const t = useTranslations();
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { data } = await textToSpeech({
        payload: {
          text: value!,
        },
      });

      // Convert arraybuffer to Blob and URL
      const blob = new Blob([data as ArrayBuffer], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    },
  });

  const onTexttoSpeech = () => {
    mutate();
  };
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
