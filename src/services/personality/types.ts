import { ToneEnum } from "../common/types";
import { Basic, Response } from "../types/common";

export interface ICreatePersonality {
  user_id: string;
  name: string;
  gender: string;
  age: number;
  occupation: string;
  personality: string;
  tone: ToneEnum;
}

export interface CreatePersonalityService {
  (args: { params: ICreatePersonality }): Response<Basic>;
}
