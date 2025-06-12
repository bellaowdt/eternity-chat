'use client';

import { IconButtonWithLoading } from '@/components/IconButtonWithLoading';
import VoicePlayer from '@/components/VoicePlayer';
import {
  GET_CHAT_HISTORY_QUERY_KEY,
  SAMPLE_CHAT_USER_ID,
  SAMPLE_CHAT_USER_PERSONALITY,
} from '@/constants/query-keys';
import { chat, textToSpeech } from '@/services/chat';
import { ChatMessageTypeEnum, IChatHistoryItem } from '@/services/chat/types';
import {
  SendRounded,
  GraphicEq as GraphicEqIcon,
  InsertEmoticon as InsertEmoticonIcon,
  Link as LinkIcon,
} from '@mui/icons-material';
import { Box, IconButton, InputBase, Paper, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';

interface MessagePayload {
  message: string;
  traceId: string;
  queryKey: [string, string];
}

const ChatInput: FC = () => {
  const t = useTranslations();
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [playbackKey, setPlaybackKey] = useState<string | null>(null);

  const { mutateAsync, isPending } = useMutation({ mutationFn: chat });
  const queryClient = useQueryClient();

  const createMessagePayload = (message: string): MessagePayload => ({
    message: message.trim(),
    traceId: Date.now().toString(),
    queryKey: [GET_CHAT_HISTORY_QUERY_KEY, SAMPLE_CHAT_USER_ID],
  });

  const addMessageToHistory = (payload: MessagePayload) => {
    const newMessage: IChatHistoryItem = {
      traceId: payload.traceId,
      message: payload.message,
      response: null,
      personality_name: SAMPLE_CHAT_USER_PERSONALITY,
      timestamp: new Date().toISOString(),
      has_context: false,
      isLoading: true,
    };

    queryClient.setQueryData(
      payload.queryKey,
      (prev: IChatHistoryItem[] = []) => [...prev, newMessage],
    );
  };

  const convertAllMessagesToHistory = () => {
    queryClient.setQueryData<IChatHistoryItem[]>(
      [GET_CHAT_HISTORY_QUERY_KEY, SAMPLE_CHAT_USER_ID],
      (prev) => {
        if (!prev || prev.length < 2) return prev;
        const updated = [...prev];
        const lastItem = updated[updated.length - 2];
        if (lastItem.type === ChatMessageTypeEnum.CURRENT) {
          updated[updated.length - 2] = {
            ...lastItem,
            type: ChatMessageTypeEnum.HISTORY,
          };
        }
        return updated;
      },
    );
  };

  const updateMessageInHistory = (
    payload: MessagePayload,
    updates: Partial<IChatHistoryItem>,
  ) => {
    queryClient.setQueryData(
      payload.queryKey,
      (prev: IChatHistoryItem[] = []) =>
        prev.map((item) =>
          item.traceId === payload.traceId ? { ...item, ...updates } : item,
        ),
    );
  };

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || isPending) return;

    const payload = createMessagePayload(trimmed);
    try {
      setMessage('');
      addMessageToHistory(payload);
      convertAllMessagesToHistory();
      inputRef.current?.focus();

      const { data } = await mutateAsync({
        payload: {
          user_id: SAMPLE_CHAT_USER_ID,
          personality_name: SAMPLE_CHAT_USER_PERSONALITY,
          message: trimmed,
        },
      });

      updateMessageInHistory(payload, {
        response: data?.response,
        isLoading: false,
        type: ChatMessageTypeEnum.CURRENT,
      });

      // Generate voice and play
      if (data?.response) {
        const { data: audioData } = await textToSpeech({
          payload: {
            text: data.response,
          },
        });

        if (audioUrl) {
          URL.revokeObjectURL(audioUrl);
        }

        const blob = new Blob([audioData as ArrayBuffer], {
          type: 'audio/mpeg',
        });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setPlaybackKey(Date.now().toString());
      }
    } catch {
      updateMessageInHistory(payload, {
        response: t('pages.chat.getChatResponseError'),
        isLoading: false,
        isError: true,
      });
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper
        component="form"
        onSubmit={onSubmit}
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
          inputRef={inputRef}
          autoFocus
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{ ml: 1, flex: 1 }}
          placeholder={`${t('pages.chat.typeMsg')}...`}
          multiline
          rows={1}
        />
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButtonWithLoading
          type="submit"
          disabled={!message.trim() || isPending}
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
        </IconButtonWithLoading>
        <IconButton>
          <GraphicEqIcon />
        </IconButton>
      </Paper>

      <Typography
        variant="body1"
        fontWeight={400}
        my={2}
        color="text.secondary"
      >
        {t('pages.chat.accuracyMsg')}
      </Typography>

      {audioUrl && (
        <VoicePlayer voiceUrl={audioUrl} playbackKey={playbackKey!} />
      )}
    </Box>
  );
};

export default ChatInput;
