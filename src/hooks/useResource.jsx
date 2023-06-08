import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllResource, updateOneResource } from '../api/agricola';
import { updateBabyState } from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';

export default function useResource(pid) {
  // const { pid } = useAuthContext();
  const queryClient = useQueryClient();

  const resourceQuery = useQuery(
    ['resource', pid || ''],
    () => getAllResource(pid),
    { enabled: !!pid }
  );

  // update Resource 인자 넣어서 하는 방법 진행해야함.
  const updateResource = useMutation(
    ({ rid, num }) => updateOneResource(pid, rid, num),
    {
      onSuccess: () => queryClient.invalidateQueries(['resource', pid]), // queryKey 유효성 제거
    }
  );

  return { resourceQuery, updateResource };
}
