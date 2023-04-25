import ActionBoard from "./components/ActionBoard";
import { useState } from "react";
import CardSlotBoard from "./components/card/CardSlotBoard";
import SharedResourceBoard from "./components/SharedResourceBoard";
import Prompt from "./components/Prompt";
import PersonalResourceBoard from "./components/PersonalResourceBoard";
import FarmBoard from "./components/farm/FarmBoard";

function App() {
  const [isCardSlotOpen, setIsCardSlotOpen] = useState(false);

  const openCardSlot = () => setIsCardSlotOpen(true);
  const closeCardSlot = () => setIsCardSlotOpen(false);

  return (
    <div className="flex">
      <div className="w-6/12">
        <SharedResourceBoard />
        <ActionBoard openMajorSlot={openCardSlot} />
      </div>
      <div className="w-6/12 flex flex-col">
        <Prompt />
        <div className="flex basis-11/12">
          <div className="flex flex-col w-6/12 bg-green-300 bg-clip-content	p-1">
            <PersonalResourceBoard />
            <FarmBoard />
            <div
              className="flex bg-purple-500 basis-2/12"
              onClick={openCardSlot}
            >
              <div className="basis-1/2 bg-red-200 bg-clip-content	p-1">
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
              <div className="basis-1/2 bg-red-300 bg-clip-content	p-1">
                활성화 카드
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 bg-green-500 bg-clip-content	p-1">
            <PersonalResourceBoard />
            <FarmBoard />
            <div className="flex bg-purple-500 basis-2/12">
              <div className="basis-1/2 bg-red-200 bg-clip-content p-1">
                보유 카드
              </div>
              <div className="basis-1/2 bg-red-300 bg-clip-content p-1">
                활성화 카드
              </div>
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
