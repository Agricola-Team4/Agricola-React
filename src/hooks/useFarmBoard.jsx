import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getFarmBoard } from '../api/agricola';

export default function useFarmBoard() {
  const queryClient = useQueryClient();

  const farmBoardQuery = useQuery(['farmBoard'], getFarmBoard);

  const updateFarmBoard = useMutation(() => updateFarmBoard(), {
    onSuccess: () => queryClient.invalidateQueries(['farmBoard']), // queryKey 유효성 제거
  });
}
