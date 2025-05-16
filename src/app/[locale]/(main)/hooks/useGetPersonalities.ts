import { useQuery } from '@tanstack/react-query';
import { getListPersonalities } from '@/services/personality';

interface GetPersonalitiesProps {
  user_id?: string | null;
}

const useGetPersonalities = ({ user_id }: GetPersonalitiesProps) => {
  const query = useQuery({
    queryKey: ['GET_PERSONALITIES_LIST', user_id],
    queryFn: async () => {
      const { data } = await getListPersonalities({
        params: { user_id },
      });
      return data;
    },
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
  });

  return query;
};

export default useGetPersonalities;
