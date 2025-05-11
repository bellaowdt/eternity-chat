import axios from '../../lib/axios';
import { GetChatHistoryService, ChatService } from './types';

const BASE_URL = '/api/v1';

export const chat: ChatService = ({ payload }) => {
  return axios.post(`${BASE_URL}/chat`, payload);
};

export const getChatHistory: GetChatHistoryService = ({ userId, params }) => {
  return axios.get(`${BASE_URL}/chat-history/${userId}`, { params });
};
