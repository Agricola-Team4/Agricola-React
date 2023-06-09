import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getActionBoard, takeAction } from "../api/agricola";
import { useBackgroundContext } from "../context/BackgroundContext";
import { useAuthContext } from "../context/AuthContext";

export default function useActionBoard() {
  const queryClient = useQueryClient();
  const { setIsAbActive, setIsFbActive } = useAuthContext();
  const { setPrompt, selectedPosArr } = useBackgroundContext();

  const actionBoardQuery = useQuery(["actionBoard"], () => getActionBoard());
  // const updateFarmBoard = useMutation(() => updateFarmBoard(), {
  //   onSuccess: () => queryClient.invalidateQueries(['farmBoard']), // queryKey 유효성 제거
  // });

  const getSelectedPosArr = () => {
    console.log(selectedPosArr);
    return selectedPosArr;
  };
  const fence = () => {
    console.log("fence");
    // console.log("과연?");
    // setIsFbActive(true);
    // setIsAbActive(false);

    // setPrompt({
    //   message: "울타리를 치고 싶은 땅을 모두 선택하세요.",
    //   buttons: [
    //     {
    //       text: "최종선택완료",
    //       onClick: () => {
    //         console.log("hello");
    //         const pid = 1;
    //         console.log("짝은어레이", selectedPosArr);
    //         //   const fenceDataArray = buildFence(pid, [selectedPosArr]);
    //         //   console.log(fenceDataArray);
    //       },
    //     },
    //     {
    //       text: "이어서 치기",
    //       onClick: () => {
    //         console.log("이어서 치기");
    //         setPrompt({
    //           message: "이어서 울타리를 만들고 싶은 땅을 선택해주세요.",
    //           buttons: [
    //             {
    //               text: "최종선택완료",
    //               onClick: () => {
    //                 console.log("최종선택완료 함수");
    //               },
    //             },
    //             {
    //               text: "이어서 치기",
    //               onClick: () => {
    //                 console.log("최종선택완료 함수");
    //               },
    //             },
    //           ],
    //         });
    //       },
    //     },
    //   ],
    // });
  };

  return { actionBoardQuery, fence };
}
