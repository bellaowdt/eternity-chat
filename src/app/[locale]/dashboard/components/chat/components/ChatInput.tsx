import { Box, IconButton, Typography, InputBase, Paper } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LinkIcon from '@mui/icons-material/Link';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { SendRounded } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { useMutation } from '@tanstack/react-query';
import { chat } from '@/services/chat';
import {
  SAMPLE_CHAT_USER_ID,
  SAMPLE_CHAT_USER_PERSONALITY,
} from '@/constants/general';
import { IChatHistoryResponse } from '@/services/chat/types';

interface ChatInputProps {
  onNewChat: (message: IChatHistoryResponse) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onNewChat }) => {
  const t = useTranslations();
  const [message, setMessage] = useState('');
  const debouncedMessage = useDebounce(message, 500);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: chat,
  });

  const handleSendMessage = async () => {
    const trimmed = debouncedMessage.trim();
    if (!trimmed || isPending) return;

    try {
      const { data } = await mutateAsync({
        payload: {
          user_id: SAMPLE_CHAT_USER_ID,
          personality_name: SAMPLE_CHAT_USER_PERSONALITY,
          message: trimmed,
        },
      });

      onNewChat({
        message: trimmed,
        response: data?.response,
        personality_name: SAMPLE_CHAT_USER_PERSONALITY,
        timestamp: new Date(),
        has_context: false,
      });

      setMessage('');
    } catch (err) {
      console.error('Failed to send message', err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight={180}
    >
      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '40px',
          backgroundColor: '#e0e0e0',
          padding: '4px 16px',
          width: '100%',
        }}
      >
        <IconButton>
          <LinkIcon />
        </IconButton>
        <InputBase
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{ ml: 1, flex: 1 }}
          placeholder={`${t('pages.chat.typeMsg')}...`}
          multiline
        />
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton onClick={handleSendMessage} disabled={isPending}>
          <Box
            sx={{
              backgroundColor: 'common.white',
              borderRadius: '50%',
              padding: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 1,
            }}
          >
            <SendRounded fontSize="small" />
          </Box>
        </IconButton>
        <IconButton>
          <GraphicEqIcon />
        </IconButton>
      </Paper>
      <Typography variant="body2" mt={2} color="text.secondary">
        {t('pages.chat.accuracyMsg')}
      </Typography>
    </Box>
  );
};

export default ChatInput;
