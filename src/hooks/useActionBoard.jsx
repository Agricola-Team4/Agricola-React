import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getActionBoard, takeAction } from "../api/agricola";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function useActionBoard() {
  const queryClient = useQueryClient();
  const { setPrompt, setIsAbActive, setIsFbActive } = useBackgroundContext();

  const actionBoardQuery = useQuery(["actionBoard"], () => getActionBoard());
  // const updateFarmBoard = useMutation(() => updateFarmBoard(), {
  //   onSuccess: () => queryClient.invalidateQueries(['farmBoard']), // queryKey 유효성 제거
  // });
  const fence_action = function fence() {
    // takeAction({ pid, aid: 17 });
    setIsFbActive(true);
    setIsAbActive(false);

    // setPrompt({
    //   message: "울타리를 치고 싶은 땅을 모두 선택하세요.",
    //   buttons: [
    //     {
    //       text: "선택완료",
    //       onClick: () => {
    //         console.log("hello");
    //       },
    //     },
    //     {
    //       text: "이어서 치기",
    //       onClick: () => {
    //         console.log("");
    //         setPrompt({
    //           message: "이어서 울타리를 만들어주세요",
    //           buttons: [
    //             {
    //               text: "최종선택완료",
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

  return { actionBoardQuery, fence_action };
}
