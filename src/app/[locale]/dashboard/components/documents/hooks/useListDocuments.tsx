import { GET_USER_DOCUMENTS_LIST_KEY } from '@/constants/query-keys';
import { listDocumentsat } from '@/services/upload-doc';
import { IDocumentParams } from '@/services/upload-doc/types';
import { useQuery } from '@tanstack/react-query';

const useListDocuments = ({ user_id, personality_name }: IDocumentParams) => {
  const query = useQuery({
    queryKey: [GET_USER_DOCUMENTS_LIST_KEY, user_id, personality_name],
    queryFn: async () => {
      const { data } = await listDocumentsat({
        params: { user_id, personality_name },
      });
      return data;
    },
    gcTime: 0,
    staleTime: 0,
  });

  return query;
};

export default useListDocuments;
