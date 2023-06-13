import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getRoundArray, roundEnd } from '../api/agricola';

export default function useRoundArr() {
  const roundArrQuery = useQuery(['roundArray'], () => getRoundArray());
  const queryClient = useQueryClient();

  const endRound = useMutation(
    ({ socket, queryClient }) => roundEnd(socket, queryClient),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['farmBoard']);
        queryClient.invalidateQueries(['actionBoard']);
      }, // queryKey 유효성 제거
    }
  );

  return { roundArrQuery, endRound };
}
