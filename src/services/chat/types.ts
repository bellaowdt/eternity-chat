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

export interface ChatPayload {
  user_id: string;
  personality_name: string;
  message: string;
}

export interface IChatHistoryParams {
  user_id: string;
  personality_name: string;
}

export interface IChatHistoryItem {
  message: string;
  response: string | null;
  personality_name: string;
  timestamp: string;
  has_context: boolean;
  traceId?: string;
  isLoading?: boolean;
  isError?: boolean;
  type?: ChatMessageTypeEnum;
}

export interface ChatResponse {
  response: string;
  sentiment: ISentiment[];
}

export interface ChatService {
  ({ payload }: { payload: ChatPayload }): Response<ChatResponse>;
}

export interface GetChatHistoryService {
  (args: { params: IChatHistoryParams; userId: number | string }): Response<
    IChatHistoryItem[]
  >;
}
