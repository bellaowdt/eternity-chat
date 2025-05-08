import { languages } from '@/navigation';

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
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
