import {  Response } from '@/types/common';

export interface GeneralInformationPayload {
  name: string;
  relationship: string;
  gender: string;
}

export interface PersonalityTraitsPayload {
  favoriteActivities: string;
  personality: string[];
}


export interface GeneralInformationUpdateService {
  ({ payload }: { payload: GeneralInformationPayload }): Response;
}