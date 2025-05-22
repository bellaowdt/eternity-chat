import axios from '../../lib/axios';
import { UploadDocumentService } from './types';

const BASE_URL = '/api/v1';

export const uploadDocumentsat: UploadDocumentService = ({
  payload,
  params,
}) => {
  console.log('payload', payload);
  console.log('params', params);
  console.log('{ params }', { params });
  return axios.post(
    `${BASE_URL}/upload-documents/${params.user_id}/${params.personality_name}`,
    payload,
    { params },
  );
};
