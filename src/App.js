import ActionBoard from './components/ActionBoard';
import CardSlotBoard from './components/CardSlotBoard';
import Prompt from './components/Prompt';
import { AnimatePresence } from 'framer-motion';
import { useCardBoard } from '../src/hooks/useCardBoard';
import PlayerContainer from './components/PlayerContainer';
import MouseComponent from './components/MouseComponent';
import { buildFence } from './api/agricola';
import { useBackgroundContext } from './context/BackgroundContext';

const aa = [
  { id: 8, left: true, right: true, top: true, bottom: true },
  { id: 9, left: true, right: true, top: true, bottom: true },
];

function App() {
  const {
    isMajorOpen,
    isP1HaveOpen,
    isP1ActOpen,
    isP2HaveOpen,
    isP2ActOpen,
    closeMajorSlot,
    closeP1HaveSlot,
    closeP1ActSlot,
    closeP2HaveSlot,
    closeP2ActSlot,
  } = useBackgroundContext();

  const {
    haveCardDataQuery: { isLoading, error, data: haveCard },
    actCardDataQuery: { isLoading: actLoading, error: actErr, data: actCard },
    majorCardDataQuery: { data: majorCard },
  } = useCardBoard();
  // console.log('<<', actCard);
  // haveCard && console.log('card data come', actCard);

  const {
    fencePosition1,
    setFencePosition1,
    fencePosition2,
    setFencePosition2,
  } = useBackgroundContext();

  // const updateFenceposition = (arr, fencePosition, setFencePosition) => {
  //   const box = { ...fencePosition };
  //   console.log(box);
  //   for (let a of arr) {
  //     box[farmBoard[a.position_id].top] = a.top;
  //     box[farmBoard[a.position_id].left] = a.left;
  //     box[farmBoard[a.position_id].right] = a.right;
  //     box[farmBoard[a.position_id].bottom] = a.bottom;
  //   }
  //   setFencePosition(box);
  // };

  // const [condition, setCondition] = useState(0);
  // const [fencePosArr, setFencePosArr] = useState([]);

  // const handleClickBtn = async n => {
  //   switch (n) {
  //     case 1:
  //       setCondition(1);
  //       break;
  //     case 2:
  //       const pid = 1; // local storage에서 받아왔다고 가정
  //       const arr = await buildFence(pid, fencePosArr);
  //       console.log(arr);
  //       if (pid % 2 === 1)
  //         updateFenceposition(arr, fencePosition1, setFencePosition1);
  //       else updateFenceposition(arr, fencePosition2, setFencePosition2);
  //       setFencePosArr([]);
  //       break;
  //   }
  // };

  return (
    <>
      <MouseComponent />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full flex flex-col lg:w-6/12 ">
          <Prompt />
          <ActionBoard />
        </div>
        <div className="w-full flex lg:w-6/12">
          <PlayerContainer
            pid={1}
            // fencePosArr={fencePosArr}
            // setFencePosArr={setFencePosArr}
            // condition={condition}
            // setCondition={setCondition}
          />
          <PlayerContainer
            pid={2}
            // fencePosArr={fencePosArr}
            // setFencePosArr={setFencePosArr}
            // condition={condition}
            // setCondition={setCondition}
          />
        </div>
        <AnimatePresence>
          {isMajorOpen ? (
            <CardSlotBoard
              condition={1}
              imageSet={majorCard}
              col="5"
              row="2"
              ratio="basis-1/5"
              close={closeMajorSlot}
              isActCardBoard={false}
            />
          ) : isP1HaveOpen ? (
            <CardSlotBoard
              condition={1}
              imageSet={haveCard && haveCard.p1}
              col="7"
              row="2"
              ratio="basis-1/7"
              close={closeP1HaveSlot}
              isActCardBoard={false}
            />
          ) : isP1ActOpen ? (
            <CardSlotBoard
              condition={actCard ? 1 : 0}
              imageSet={actCard && actCard.p1}
              col="7"
              row="2"
              ratio="basis-1/7"
              close={closeP1ActSlot}
              isActCardBoard={true}
            />
          ) : isP2HaveOpen ? (
            <CardSlotBoard
              condition={1}
              imageSet={haveCard && haveCard.p2}
              col="5"
              row="2"
              ratio="basis-1/7"
              close={closeP2HaveSlot}
              isActCardBoard={false}
            />
          ) : isP2ActOpen ? (
            <CardSlotBoard
              condition={actCard ? 1 : 0}
              imageSet={actCard && actCard.p2}
              col="5"
              row="2"
              ratio="basis-1/5"
              close={closeP2ActSlot}
              isActCardBoard={true}
            />
          ) : (
            ''
          )}
        </AnimatePresence>
      </div>

      {/* <ReactQueryDevtools /> */}
    </>
  );
}

export default App;
