import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCurrentRound, getRoundArray, roundEnd } from '../api/agricola';
import { useBackgroundContext } from '../context/BackgroundContext';

export default function useRoundArr() {
  const roundArrQuery = useQuery(['roundArray'], () => getRoundArray());
  const queryClient = useQueryClient();
  const { setIsEnd } = useBackgroundContext();

  const endRound = useMutation(
    ({ socket, queryClient }) => roundEnd(socket, queryClient),
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(['farmBoard']);
        queryClient.invalidateQueries(['actionBoard']);
        queryClient.invalidateQueries(['roundArray']);
        const a = await getCurrentRound();
        // console.log(a);
        // console.log(a.round);
        if (a[0].round === 8) {
          console.log('modal!');
          setIsEnd(true);
        }
      }, // queryKey 유효성 제거
    }
  );

  return { roundArrQuery, endRound };
}
