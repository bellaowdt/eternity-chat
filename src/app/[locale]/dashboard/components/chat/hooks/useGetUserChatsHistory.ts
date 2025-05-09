import { useQuery } from '@tanstack/react-query';
import { chatHistory } from '@/services/chat';
import { IChatHistoryParams } from '@/services/chat/types';

interface GetUserChatsHistoryProps {
  user_id: string | number;
  params: IChatHistoryParams;
}

const useGetUserChatsHistory = ({
  user_id,
  params,
}: GetUserChatsHistoryProps) => {
  const query = useQuery({
    enabled: !!user_id,
    queryKey: ['GET_USER_CHAT_HISTORY', user_id],
    queryFn: () => chatHistory({ user_id, params }),
    gcTime: 0,
  });

  return query;
};

export default useGetUserChatsHistory;
