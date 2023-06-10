import {
  getMajorCard,
  getPlayerActCard,
  getPlayerHaveCard,
  takeAction,
  takeActionAndUpdateCardBoard,
} from '../api/agricola';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useCardBoard() {
  const queryClient = useQueryClient();

  const haveCardDataQuery = useQuery(['haveCardData'], () =>
    getPlayerHaveCard()
  );

  const actCardDataQuery = useQuery(['actCardData'], () => getPlayerActCard());

  const majorCardDataQuery = useQuery(['majorCardData'], () => getMajorCard());

  // const queryKey

  const useCard = useMutation(({ pid, cid }) => takeAction(pid, 21, cid), {
    onSuccess: () => {
      queryClient.invalidateQueries(['haveCardData']);
      queryClient.invalidateQueries(['majorCardData']);
      queryClient.invalidateQueries(['actCardData']);
      queryClient.invalidateQueries(['actionBoard']);
      queryClient.invalidateQueries(['farmBoard']);
    }, // queryKey 유효성 제거
  });

  return {
    haveCardDataQuery,
    actCardDataQuery,
    majorCardDataQuery,
    useCard,
  };
}
