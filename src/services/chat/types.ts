import { ToneEnum } from '../common/types';
import { Response } from '../types/common';

export enum ChatUserTypeEnum {
  USER = 'user',
  SYSTEM = 'system',
}

export enum ChatMessageTypeEnum {
  HISTORY = 'history',
  CURRENT = 'current',
}

export enum ChatCardDirectionEnum {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface ISentiment {
  label: string;
  score: number;
  tone: ToneEnum;
}

export interface ChatPaylod {
  user_id: string;
  personality_name: string;
  message: string;
}

export interface IChatHistoryParams {
  user_id: string;
  personality_name: string;
}

export interface IChatHistoryResponse {
  message: string;
  response: string;
  personality_name: string;
  timestamp: string;
  has_context: boolean;
}

export interface ChatResponse {
  response: string;
  sentiment: ISentiment[];
}

export interface ChatService {
  ({ payload }: { payload: ChatPaylod }): Response<ChatResponse>;
}

export interface ChatHistoyService {
  (args: { params: IChatHistoryParams; user_id: number | string }): Response;
}
