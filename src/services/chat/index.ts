import { SAMPLE_VOICE_ID } from '@/constants/query-keys';
import axios from '../../lib/axios';
import externalApi from '../../lib/externalApi';

import {
  GetChatHistoryService,
  ChatService,
  ChatTextToVoiceService,
} from './types';

const BASE_URL = '/api/v1';
const SPEECCH_URL = '/v1';
const voiceId = SAMPLE_VOICE_ID;
const apiKey = 'sk_af19c153ad88b4eed6776e26cfd95428d718fd25a12b09c9';

export const chat: ChatService = ({ payload }) => {
  return axios.post(`${BASE_URL}/chat`, payload);
};

export const getChatHistory: GetChatHistoryService = ({ userId, params }) => {
  return axios.get(`${BASE_URL}/chat-history/${userId}`, { params });
};

export const textToSpeech: ChatTextToVoiceService = ({ payload }) => {
  return externalApi.post(`${SPEECCH_URL}/text-to-speech/${voiceId}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
      Accept: 'application/json',
    },
    responseType: 'arraybuffer',
  });
};
