import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllResource, updateWood } from "../api/agricola";
import { updateBabyState } from "../api/agricola";

export default function useResource() {
  const queryClient = useQueryClient();

  const resourceQuery = useQuery(["resource"], getAllResource);

  const updateResource = useMutation(() => updateResource(), {
    onSuccess: () => queryClient.invalidateQueries(["resource"]), // queryKey 유효성 제거
  });

  const updateBaby = useMutation(() => updateBabyState(), {
    onSuccess: () => queryClient.invalidateQueries(["resource"]), // queryKey 유효성 제거
  });

  return { resourceQuery, updateResource, updateBaby };
}
