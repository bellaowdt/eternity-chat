import { languages } from '@/navigation';
import { Response } from '../types/common';

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInService {
  (args: { payload: SignInPayload }): Response;
}

export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
}
export interface SignUpService {
  (args: { payload: SignUpPayload }): Response;
}

export interface IAccountSetting {
  name: string;
  email: string;
  password: string;
}

export interface IGeneralSetting {
  themeType: string;
  language: keyof typeof languages;
  isDeleteChats: boolean;
}
