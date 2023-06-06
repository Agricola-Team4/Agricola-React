import ActionBoard from "./components/ActionBoard";
import { useState } from "react";
import CardSlotBoard from "./components/CardSlotBoard";
import Prompt from "./components/Prompt";
import PersonalResourceBoard from "./components/PersonalResourceBoard";
import FarmBoard from "./components/FarmBoard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthContextProvider } from "./context/AuthContext";

import {
  jobImages_1,
  jobImages_2,
  majorImages,
  subImages_1,
  subImages_2,
} from "../src/constants/imageContants";

import { motion, AnimatePresence } from "framer-motion";
import { useCardBoard } from "../src/hooks/useCardBoard";

function App() {
  const queryClient = new QueryClient();
  const {
    isMajorOpen,
    setIsMajorOpen,
    isP1HaveOpen,
    setIsP1HaveOpen,
    isP1ActOpen,
    setIsP1ActOpen,
    isP2HaveOpen,
    setIsP2HaveOpen,
    isP2ActOpen,
    setIsP2ActOpen,
    openMajorSlot,
    closeMajorSlot,
    openP1HaveSlot,
    closeP1HaveSlot,
    openP1ActSlot,
    closeP1ActSlot,
    openP2HaveSlot,
    closeP2HaveSlot,
    openP2ActSlot,
    closeP2ActSlot,
  } = useCardBoard();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full my-1 flex flex-col lg:w-6/12">
            <Prompt />
            <ActionBoard openMajorSlot={openMajorSlot} />
          </div>
          <div className="w-full flex lg:w-6/12">
            <div className="flex flex-col w-6/12 bg-clip-content	p-1">
              <PersonalResourceBoard />
              <FarmBoard />
              <div className="flex ">
                <div
                  className="basis-1/2 bg-red-200 bg-clip-content p-1 aspect-square cursor-pointer"
                  onClick={openP1HaveSlot}
                >
                  보유 카드
                </div>
                <div
                  className="basis-1/2 bg-red-300 bg-clip-content	p-1 aspect-square"
                  onClick={openP1ActSlot}
                >
                  활성화 카드
                </div>
              </div>
            </div>
            <div className="flex flex-col w-6/12  bg-clip-content	p-1">
              <PersonalResourceBoard />
              <FarmBoard />
              <div className="flex ">
                <div
                  className="basis-1/2 bg-red-200 bg-clip-content p-1 aspect-square"
                  onClick={openP2HaveSlot}
                >
                  보유 카드
                </div>
                <div
                  className="basis-1/2 bg-red-300 bg-clip-content p-1 aspect-square"
                  onClick={openP2ActSlot}
                >
                  활성화 카드
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {/* {isCardSlotOpen && ( */}
            {isMajorOpen ? (
              <CardSlotBoard
                imageSet={majorImages}
                col="5"
                row="2"
                ratio="basis-1/5"
                close={closeMajorSlot}
              />
            ) : isP1HaveOpen ? (
              <CardSlotBoard
                imageSet={subImages_1}
                col="5"
                row="2"
                ratio="basis-1/5"
                close={closeMajorSlot}
              />
            ) : isP1ActOpen ? (
              <CardSlotBoard
                imageSet={subImages_2}
                col="5"
                row="2"
                ratio="basis-1/5"
                close={closeMajorSlot}
              />
            ) : isP2HaveOpen ? (
              <CardSlotBoard
                imageSet={jobImages_1}
                col="5"
                row="2"
                ratio="basis-1/5"
                close={closeMajorSlot}
              />
            ) : isP2ActOpen ? (
              <CardSlotBoard
                imageSet={jobImages_2}
                col="5"
                row="2"
                ratio="basis-1/5"
                close={closeMajorSlot}
              />
            ) : (
              <p>hi</p>
            )}
          </AnimatePresence>
        </div>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
