import { IChatHistoryParams, IChatHistoryItem } from '../chat/types';
import { GetersonalitiesResponse } from '../personality/types';
import { Response } from '../types/common';

export interface IDocumentParams {
  user_id: string;
  personality_name: string;
}

export interface IListDocumentPayload extends IDocumentParams {
  documents: [{ name: string }];
}

export interface IDocumentListResponse {
  files: string[];
}

export interface UploadDocumentService {
  (args: {
    params: IDocumentParams;
    payload: FormData;
  }): Response<GetersonalitiesResponse>;
}

export interface ListDocumentService {
  (args: { params: IDocumentParams }): Response<IListDocumentPayload>;
}

interface IDeleteDocumentParams extends IDocumentParams {
  document_name: string;
}

export interface DeleteDocumentService {
  (args: { params: IDeleteDocumentParams }): Response;
}
