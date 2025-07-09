import { useQuery } from "@tanstack/react-query";
import { getAccountDetail } from "@/services/account";

const useGetAccountDetail = () => {
  const query = useQuery({
    queryKey: ["GET_ACCOUNT_DETAIL"],
    queryFn: getAccountDetail,
    gcTime: 0,
  });

  return query;
};

export default useGetAccountDetail;
