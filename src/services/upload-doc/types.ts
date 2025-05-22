import { GetersonalitiesResponse } from '../personality/types';
import { Response } from '../types/common';

export interface IUploadDocumentParams {
  user_id: string;
  personality_name: string;
}

export interface IUploadDocumentPayload {
  files: string[];
}

export interface UploadDocumentService {
  (args: {
    params: IUploadDocumentParams;
    payload: IUploadDocumentPayload;
  }): Response<GetersonalitiesResponse>;
}
