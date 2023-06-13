import { useQueryClient } from '@tanstack/react-query';
import { buildFence } from '../api/agricola';

export default function useFence() {
  const fenceArrQuery = useQuery(['roundArray'], () => buildFence());
  const queryClient = useQueryClient();

  const postFence = useMutation(
    ({ socket, queryClient }) => roundEnd(socket, queryClient),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['farmBoard']);
        queryClient.invalidateQueries(['actionBoard']);
        queryClient.invalidateQueries(['roundArray']);
      }, // queryKey 유효성 제거
    }
  );

  return { fenceArrQuery, postFence };
}
