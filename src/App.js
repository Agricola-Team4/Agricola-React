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
  console.log('hello');
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full my-1 flex flex-col md:w-6/12">
        <Prompt />
        <ActionBoard />
        <div className="w-max h-max bg-red-300" onClick={openCardSlot}>
          주요설비
        </div>
        <div className="flex flex-row">
          <div className="basis-1/5 bg-yellow-300"></div>
          <div className="basis-1/5 bg-yellow-300"></div>
          <div className="basis-1/5 bg-yellow-300"></div>
          <div className="basis-1/5 bg-yellow-300"></div>
          <div className="basis-1/5 bg-yellow-300"></div>
        </div>
      </div>
      <div className="w-full flex md:w-6/12">
        <div className="flex flex-col w-6/12 bg-clip-content	p-1">
          <PersonalResourceBoard />
          <FarmBoard />
          <div className="flex ">
            <div className="basis-1/2 bg-red-200 bg-clip-content p-1 aspect-square">
              보유 카드
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

      {isCardSlotOpen && (
        <CardSlotBoard
          img="../../public/img/majors_bg.jpg"
          col="5"
          row="2"
          close={closeCardSlot}
        />
      )}
    </div>
  );
}

export default App;
