import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getActionBoard } from '../api/agricola';

export default function useActionBoard() {
  const queryClient = useQueryClient();

  const actionBoardQuery = useQuery(['actionBoard'], () => getActionBoard());
  console.log(actionBoardQuery);
  // const updateFarmBoard = useMutation(() => updateFarmBoard(), {
  //   onSuccess: () => queryClient.invalidateQueries(['farmBoard']), // queryKey 유효성 제거
  // });

  return { actionBoardQuery };
}
