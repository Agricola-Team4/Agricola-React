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
import PlayerContainer from './components/PlayerContainer';

const aa = [{ id: 12, left: true, right: true, top: true, bottom: true }];

const fencePosition1 = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false,
  26: false,
  27: false,
  28: false,
  29: false,
  30: false,
  31: false,
  32: false,
  33: false,
  34: false,
  35: false,
  36: false,
  37: false,
  38: false,
};

const fencePosition2 = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  12: false,
  13: false,
  14: false,
  15: false,
  16: false,
  17: false,
  18: false,
  19: false,
  20: false,
  21: false,
  22: false,
  23: false,
  24: false,
  25: false,
  26: false,
  27: false,
  28: false,
  29: false,
  30: false,
  31: false,
  32: false,
  33: false,
  34: false,
  35: false,
  36: false,
  37: false,
  38: false,
};

const farmBoard = {
  1: {
    top: 1,
    left: 4,
    right: 5,
    bottom: 8,
  },
  2: {
    top: 2,
    left: 5,
    right: 6,
    bottom: 9,
  },
  3: {
    top: 3,
    left: 6,
    right: 7,
    bottom: 10,
  },
  4: {
    top: 8,
    left: 11,
    right: 12,
    bottom: 15,
  },
  5: {
    top: 9,
    left: 12,
    right: 13,
    bottom: 16,
  },
  6: {
    top: 10,
    left: 13,
    right: 14,
    bottom: 17,
  },
  7: {
    top: 15,
    left: 18,
    right: 19,
    bottom: 22,
  },
  8: {
    top: 16,
    left: 19,
    right: 20,
    bottom: 23,
  },
  9: {
    top: 17,
    left: 20,
    right: 21,
    bottom: 24,
  },
  10: {
    top: 22,
    left: 25,
    right: 26,
    bottom: 29,
  },
  11: {
    top: 23,
    left: 26,
    right: 27,
    bottom: 30,
  },
  12: {
    top: 24,
    left: 27,
    right: 28,
    bottom: 31,
  },
  13: {
    top: 29,
    left: 32,
    right: 33,
    bottom: 36,
  },
  14: {
    top: 30,
    left: 33,
    right: 34,
    bottom: 37,
  },
  15: {
    top: 31,
    left: 34,
    right: 35,
    bottom: 38,
  },
};

const updateFenceposition = fencePosition => {
  for (let a of aa) {
    fencePosition[farmBoard[a.id].top] = a.top;
    fencePosition[farmBoard[a.id].left] = a.left;
    fencePosition[farmBoard[a.id].right] = a.right;
    fencePosition[farmBoard[a.id].bottom] = a.bottom;
  }
};

const pid = 1;
pid % 2 == 1
  ? updateFenceposition(fencePosition1)
  : updateFenceposition(fencePosition2);

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
          <div className="w-full flex flex-col lg:w-6/12 ">
            <Prompt />
            <ActionBoard openMajorSlot={openMajorSlot} />
          </div>
          <div className="w-full flex lg:w-6/12">
            <PlayerContainer
              fencePosition={fencePosition1}
              onClick1={openP1HaveSlot}
              onClick2={openP1ActSlot}
            />
            <PlayerContainer
              fencePosition={fencePosition2}
              onClick1={openP2HaveSlot}
              onClick2={openP2ActSlot}
            />
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
