import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllResource, updateWood } from "../api/agricola";
import { updateBabyState } from "../api/agricola";

export default function useResource() {
  const queryClient = useQueryClient();

  const resourceQuery = useQuery(["resource"], getAllResource);

  // update Resource 인자 넣어서 하는 방법 진행해야함.
  const updateResource = useMutation(
    (pid, rid, num) => updateResource(pid, rid, num),
    {
      onSuccess: () => queryClient.invalidateQueries(["resource"]), // queryKey 유효성 제거
    }
  );

  const updateBaby = useMutation(() => updateBabyState(), {
    onSuccess: () => queryClient.invalidateQueries(["resource"]), // queryKey 유효성 제거
  });

  return { resourceQuery, updateResource, updateBaby };
}
