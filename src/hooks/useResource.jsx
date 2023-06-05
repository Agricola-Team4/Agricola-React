import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllResource, updateOneResource } from '../api/agricola';
import { updateBabyState } from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';
import { get } from 'http';

export default function useResource() {
  const { pid } = useAuthContext();
  const queryClient = useQueryClient();

  const resourceQuery = useQuery(
    ['resource', pid || ''],
    () => getAllResource(pid),
    { enabled: !!pid }
  );
  console.log(pid);

  // update Resource 인자 넣어서 하는 방법 진행해야함.
  const updateResource = useMutation(
    (pid, rid, num) => updateOneResource(pid, rid, num),
    {
      onSuccess: () => queryClient.invalidateQueries(['resource']), // queryKey 유효성 제거
    }
  );

  const updateBaby = useMutation(() => updateBabyState(), {
    onSuccess: () => queryClient.invalidateQueries(['resource']), // queryKey 유효성 제거
  });

  return { resourceQuery, updateResource, updateBaby };
}
