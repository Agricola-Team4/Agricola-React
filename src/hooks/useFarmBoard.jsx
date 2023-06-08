import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getFarmBoard } from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';

export default function useFarmBoard(pid) {
  // const { pid, pid2 } = useAuthContext();
  // const queryClient = useQueryClient();
  console.log(pid);

  const farmBoardQuery = useQuery(['farmBoard', pid], () => getFarmBoard(pid));

  // const updateFarmBoard = useMutation(() => updateFarmBoard(), {
  //   onSuccess: () => queryClient.invalidateQueries(['farmBoard']), // queryKey 유효성 제거
  // });

  return { farmBoardQuery };
}
