import { textToSpeech } from '@/services/chat';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

interface AudioPlayerProps {
  text: string;
}

const useAudioPlayer = ({ text }: AudioPlayerProps) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { data } = await textToSpeech({
        payload: {
          text,
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
  return {
    audioUrl,
    isPending,
    onTexttoSpeech,
  };
};

export default useAudioPlayer;
