import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  firstPlayerData,
  getAllResource,
  updateOneResource,
} from '../api/agricola';
import { updateBabyState } from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';
import { useWebSocketContext } from '../context/WebSocketContext';

export default function useResource(pid) {
  // const { pid } = useAuthContext();
  const queryClient = useQueryClient();
  const { socket } = useWebSocketContext();

  const resourceQuery = useQuery(
    ['resource', pid || ''],
    () => getAllResource(pid),
    { enabled: !!pid }
  );

  const getFirstPlayer = useQuery(
    ['firstPlayer', pid || ''],
    () => firstPlayerData(pid),
    { enabled: !!pid }
  );

  // update Resource 인자 넣어서 하는 방법 진행해야함.
  const updateResource = useMutation(
    ({ rid, num, socket }) => updateOneResource(pid, rid, num, socket),
    {
      onSuccess: () => queryClient.invalidateQueries(['resource', pid]), // queryKey 유효성 제거
    }
  );

  return { resourceQuery, updateResource, getFirstPlayer };
}
