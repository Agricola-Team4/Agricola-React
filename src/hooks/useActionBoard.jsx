import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getActionBoard, takeAction } from "../api/agricola";
import { useBackgroundContext } from "../context/BackgroundContext";
import { useAuthContext } from "../context/AuthContext";

export function useActionBoard() {
  const { setIsAbActive, setIsFbActive, pid } = useAuthContext();
  const { setPrompt, selectedPosArr } = useBackgroundContext();
  const queryClient = useQueryClient();

  const actionBoardQuery = useQuery(["actionBoard"], () => getActionBoard());
  const updateFarmBoard = useMutation(() => updateFarmBoard(), {
    onSuccess: () => queryClient.invalidateQueries(["farmBoard"]), // queryKey 유효성 제거
  });

  const updateActionBoard = useMutation(() => getActionBoard(), {
    onSuccess: () => queryClient.invalidateQueries(["actionBoard"]), // queryKey 유효성 제거
  });

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

  return { actionBoardQuery };
  // validLandQuery, useValidLand
}
