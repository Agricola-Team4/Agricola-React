import ActionBoard from './components/ActionBoard';
import CardSlotBoard from './components/CardSlotBoard';
import Prompt from './components/Prompt';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  jobImages_1,
  jobImages_2,
  majorImages,
  subImages_1,
  subImages_2,
} from '../src/constants/imageContants';

import { motion, AnimatePresence } from 'framer-motion';
import { useCardBoard } from '../src/hooks/useCardBoard';
import PlayerContainer from './components/PlayerContainer';
import MouseComponent from './components/MouseComponent';

const aa = [
  { id: 8, left: true, right: true, top: true, bottom: true },
  { id: 9, left: true, right: true, top: true, bottom: true },
];

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

  const updateFenceposition = (fencePosition, setFencePosition) => {
    const box = { ...fencePosition };
    console.log(box);
    for (let a of aa) {
      box[farmBoard[a.id].top] = a.top;
      box[farmBoard[a.id].left] = a.left;
      box[farmBoard[a.id].right] = a.right;
      box[farmBoard[a.id].bottom] = a.bottom;
    }
    setFencePosition(box);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MouseComponent />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full flex flex-col lg:w-6/12 ">
          <Prompt />
          <ActionBoard openMajorSlot={openMajorSlot} />
        </div>
        <div className="w-full flex lg:w-6/12">
          <PlayerContainer
            onClick1={openP1HaveSlot}
            onClick2={openP1ActSlot}
            pid={1}
          />
          <PlayerContainer
            onClick1={openP2HaveSlot}
            onClick2={openP2ActSlot}
            pid={2}
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

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
