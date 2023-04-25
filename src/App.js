import ActionBoard from './components/ActionBoard';
import { useState } from 'react';
import CardSlotBoard from './components/CardSlotBoard';
import Prompt from './components/Prompt';
import PersonalResourceBoard from './components/PersonalResourceBoard';
import FarmBoard from './components/FarmBoard';

function App() {
  const [isCardSlotOpen, setIsCardSlotOpen] = useState(false);

  const openCardSlot = () => setIsCardSlotOpen(true);
  const closeCardSlot = () => setIsCardSlotOpen(false);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full my-1 flex flex-col lg:w-6/12">
        <Prompt />
        <ActionBoard openMajorSlot={openCardSlot} />
      </div>
      <div className="w-full flex lg:w-6/12">
        <div className="flex flex-col w-6/12 bg-clip-content	p-1">
          <PersonalResourceBoard />
          <FarmBoard />
          <div className="flex ">
            <div
              className="basis-1/2 bg-red-200 bg-clip-content p-1 aspect-square"
              onClick={openCardSlot}
            >
              보유 카드
              {isCardSlotOpen && (
                <CardSlotBoard
                  name="jobImages"
                  bg="../../public/img/majors_bg.jpg"
                  cardNum="10"
                  ratio="basis-1/5"
                  close={closeCardSlot}
                />
              )}
            </div>
            <div className="basis-1/2 bg-red-300 bg-clip-content	p-1 aspect-square">
              활성화 카드
            </div>
          </div>
        </div>
        <div className="flex flex-col w-6/12  bg-clip-content	p-1">
          <PersonalResourceBoard />
          <FarmBoard />
          <div className="flex ">
            <div className="basis-1/2 bg-red-200 bg-clip-content p-1 aspect-square">
              보유 카드
            </div>
            <div className="basis-1/2 bg-red-300 bg-clip-content p-1 aspect-square">
              활성화 카드
            </div>
          </div>
        </div>
      </div>

      {/* 주요설비 */}
      {isCardSlotOpen && (
        <CardSlotBoard
          name="jobImages"
          bg="../../public/img/majors_bg.jpg"
          cardNum="10"
          ratio="basis-1/5"
          close={closeCardSlot}
        />
      )}
    </div>
  );
}

export default App;
