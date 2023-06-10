import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getActionBoard, takeAction } from '../api/agricola';
import { useBackgroundContext } from '../context/BackgroundContext';
import { useAuthContext } from '../context/AuthContext';

export default function useActionBoard() {
  const { setIsAbActive, setIsFbActive } = useAuthContext();
  const { setPrompt, selectedPosArr } = useBackgroundContext();

  const actionBoardQuery = useQuery(['actionBoard'], () => getActionBoard());
  // const updateFarmBoard = useMutation(() => updateFarmBoard(), {
  //   onSuccess: () => queryClient.invalidateQueries(['farmBoard']), // queryKey 유효성 제거
  // });

  const getSelectedPosArr = () => {
    console.log(selectedPosArr);
    return selectedPosArr;
  };

  return { actionBoardQuery };
}
