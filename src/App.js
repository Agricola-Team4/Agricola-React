import ActionBoard from './components/ActionBoard';
import { useState } from 'react';
import CardSlotBoard from './components/CardSlotBoard';
import Prompt from './components/Prompt';
import PersonalResourceBoard from './components/PersonalResourceBoard';
import FarmBoard from './components/FarmBoard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthContextProvider } from './context/AuthContext';

import {
  jobImages_1,
  jobImages_2,
  majorImages,
  subImages_1,
  subImages_2,
} from '../src/constants/imageContants';

import { motion, AnimatePresence } from 'framer-motion';
import { useCardBoard } from '../src/hooks/useCardBoard';
import CardPack from './components/CardPack';

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
                <CardPack
                  text="보유카드"
                  bgColor="bg-yellow-200"
                  onClick={openP1HaveSlot}
                />
                <CardPack
                  text="활성화카드"
                  bgColor="bg-orange-300"
                  onClick={openP1ActSlot}
                />
              </div>
            </div>
            <div className="flex flex-col w-6/12  bg-clip-content	p-1">
              <PersonalResourceBoard />
              <FarmBoard />
              <div className="flex ">
                <CardPack
                  text="보유카드"
                  bgColor="bg-yellow-200"
                  onClick={openP2HaveSlot}
                />
                <CardPack
                  text="활성화카드"
                  bgColor="bg-orange-300"
                  onClick={openP2ActSlot}
                />
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
              ''
            )}
          </AnimatePresence>
        </div>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
