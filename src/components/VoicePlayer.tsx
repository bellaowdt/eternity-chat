import { Box } from '@mui/material';

interface VoicePlayerProps {
  voiceUrl: string;
}

const VoicePlayer = ({ voiceUrl }: VoicePlayerProps) => {
  return (
    <Box sx={{ display: 'none' }}>
      <figure>
        <audio controls autoPlay>
          <source src={voiceUrl} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      </figure>
    </Box>
  );
};

export default VoicePlayer;
