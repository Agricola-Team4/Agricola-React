import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFarmBoard } from "../api/agricola";
import { useBackgroundContext } from "../context/BackgroundContext";
import { useState } from "react";

export default function useFarmBoard(pid) {
  const queryClient = useQueryClient();
  
  const farmBoardQuery = useQuery(['farmBoard', pid], () => getFarmBoard(pid));
  const { setIsAnimal } = useBackgroundContext();
  const updateFarmBoard = useMutation(() => updateFarmBoard(), {
    onSuccess: () => queryClient.invalidateQueries(["farmBoard"]), // queryKey 유효성 제거
  });

  const animalEvent = ({ name, num }) => {
    console.log("음메에에에에에에에에에에", name, num);
    setIsAnimal({
      visible: true,
      name: name,
      num: num,
      img: (
        <img className="w-3 basis-1/6" src="/img/sheep_icon.png" alt="sheep" />
      ),
    });
  };

  return { farmBoardQuery, animalEvent };
}
