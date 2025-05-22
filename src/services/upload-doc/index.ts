import axios from '../../lib/axios';
import {
  DeleteDocumentService,
  ListDocumentService,
  UploadDocumentService,
} from './types';

const BASE_URL = '/api/v1';

export const uploadDocumentsat: UploadDocumentService = ({
  payload,
  params,
}) => {
  return axios.post(
    `${BASE_URL}/upload-documents/${params.user_id}/${params.personality_name}`,
    payload,
    { params },
  );
};

export const listDocumentsat: ListDocumentService = ({ params }) => {
  return axios.get(
    `${BASE_URL}/documents/${params.user_id}/${params.personality_name}`,
    { params },
  );
};

export const deleteDocument: DeleteDocumentService = ({ params }) => {
  return axios.delete(
    `${BASE_URL}/documents/${params.user_id}/${params.personality_name}/${params.document_name}`,
  );
};
