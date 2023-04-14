import ActionBoard from './components/ActionBoard';
import CardSlot from './components/CardSlot';
import { useState } from 'react';
import CardSlotBoard from './components/CardSlotBoard';
import SharedResourceBoard from './components/SharedResourceBoard';
import Prompt from './components/Prompt';

function App() {
  const [isCardSlotOpen, setIsCardSlotOpen] = useState(false);

  const openCardSlot = () => setIsCardSlotOpen(true);
  const closeCardSlot = () => setIsCardSlotOpen(false);

  return (
    <div className="flex">
      <div className="w-6/12">
        <SharedResourceBoard />
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
      <div className="w-6/12">
        <Prompt />
        <div className="flex h-full">
          <div className="w-6/12 bg-green-300"></div>
          <div className="w-6/12 bg-green-500"></div>
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
