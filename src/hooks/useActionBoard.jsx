import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getActionBoard, takeAction } from '../api/agricola';
import { useBackgroundContext } from '../context/BackgroundContext';
import { useAuthContext } from '../context/AuthContext';

export function useActionBoard() {
  const { setIsAbActive, setIsFbActive, pid } = useAuthContext();
  const { setPrompt, selectedPosArr } = useBackgroundContext();
  const queryClient = useQueryClient();

  const actionBoardQuery = useQuery(['actionBoard'], () => getActionBoard());

  const basicAction = async (actionId) => {
    await takeAction(pid, actionId,1);

    queryClient.invalidateQueries(['actionBoard']);
    queryClient.invalidateQueries(['farmBoard', pid]);
    queryClient.invalidateQueries(['resource', pid]);

  };

  // const updateFarmBoard = useMutation(() => updateFarmBoard(), {
  //   onSuccess: () => queryClient.invalidateQueries(['farmBoard']), // queryKey 유효성 제거
  // });

  // const validLandQuery = useQuery(
  //   ["validLandArr", pid || ""],
  //   () => takeAction(pid, 12, 0),
  //   { enabled: !!pid }
  // );

  // const useValidLand = useMutation(({ pid }) => takeAction(pid, 12, 0), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["validLandArr"], pid);
  //   },
  // });

  return { actionBoardQuery, basicAction};
  // validLandQuery, useValidLand
}
