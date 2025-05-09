import axios from '../../lib/axios';
import { ChatHistoyService, ChatService } from './types';

const BASE_URL = '/api/v1';

export const chat: ChatService = ({ payload }) => {
  return axios.post(`${BASE_URL}/chat`, payload);
};

export const chatHistory: ChatHistoyService = ({ user_id, params }) => {
  return axios.get(`${BASE_URL}/chat-history/${user_id}`, { params });
};
