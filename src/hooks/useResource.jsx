import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getResource, updateWood } from '../api/agricola';
import { updateBabyState } from '../api/agricola';

export default function useResource() {
  const queryClient = useQueryClient();

  const resourceQuery = useQuery(['resource'], getResource);

  const updateResource = useMutation(() => updateWood(), {
    onSuccess: () => queryClient.invalidateQueries(['resource']), // queryKey 유효성 제거
  });

  const updateBaby = useMutation(() => updateBabyState(), {
    onSuccess: () => queryClient.invalidateQueries(['resource']), // queryKey 유효성 제거
  });

  return { resourceQuery, updateResource, updateBaby };
}
