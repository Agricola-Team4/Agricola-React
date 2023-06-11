import {
  getMajorCard,
  getPlayerActCard,
  getPlayerHaveCard,
  takeAction,
  takeActionAndUpdateCardBoard,
} from "../api/agricola";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useBackgroundContext } from "../context/BackgroundContext";

export function useCardBoard() {
  const queryClient = useQueryClient();
  const { setPrompt, condition, setCondition } = useBackgroundContext();
  const clearPromptMsg = (time) => {
    setTimeout(() => {
      setPrompt({ message: "", buttons: [] });
    }, time);
  };
  const haveCardDataQuery = useQuery(["haveCardData"], () =>
    getPlayerHaveCard()
  );

  const actCardDataQuery = useQuery(["actCardData"], () => getPlayerActCard());

  const majorCardDataQuery = useQuery(["majorCardData"], () => getMajorCard());

  // const queryKey

  const useCard = useMutation(
    ({ pid, aid, cid }) => takeAction(pid, aid, cid),
    {
      onSuccess: () => {
        setPrompt({
          message: "카드가 활성화 되었습니다.",
          buttons: [],
        });
        queryClient.invalidateQueries(["haveCardData"]);
        queryClient.invalidateQueries(["majorCardData"]);
        queryClient.invalidateQueries(["actCardData"]);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["farmBoard"]);
        queryClient.invalidateQueries(["resource"]);
        setCondition(0);

        clearPromptMsg(3000);
      }, // queryKey 유효성 제거

      onError: (err) => {
        console.log("err msg", err, "condition ", condition);
        if ((condition = 5)) {
          console.log("err msg", err.response.data.error);
          setPrompt({
            message: "교습 행동을 위한 음식이 부족합니다.",
            buttons: [],
          });
          // clearPromptMsg(3000);
        }
      },
    }
  );

  return {
    haveCardDataQuery,
    actCardDataQuery,
    majorCardDataQuery,
    useCard,
  };
}
