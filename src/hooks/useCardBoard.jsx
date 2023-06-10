import { useState } from "react";
import { image_R, job_sub_Images } from "../constants/imageContants";
import {
  getMajorCard,
  getPlayerActCard,
  getPlayerHaveCard,
} from "../api/agricola";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useCardBoard() {
  const haveCardDataQuery = useQuery(["haveCardData"], () =>
    getPlayerHaveCard()
  );

  const actCardDataQuery = useQuery(["actCardData"], () => getPlayerActCard());

  const majorCardDataQuery = useQuery(["majorCardData"], () => getMajorCard());

  return {
    haveCardDataQuery,
    actCardDataQuery,
    majorCardDataQuery,
  };
}
