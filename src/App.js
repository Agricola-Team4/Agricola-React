import ActionBoard from './components/ActionBoard';
import { useState } from 'react';
import CardSlotBoard from './components/CardSlotBoard';


function App() {
  const [isCardSlotOpen, setIsCardSlotOpen] = useState(false);

  const openCardSlot = ()=>setIsCardSlotOpen(true)
  const closeCardSlot = ()=>setIsCardSlotOpen(false)

  return (
    <div>
      <ActionBoard />
      
      <div className='w-max h-max bg-red-300' onClick={openCardSlot}>주요설비</div>

      {isCardSlotOpen && 
      <CardSlotBoard img="../../public/img/majors_bg.jpg" col="5" row="2" close={closeCardSlot} />
      }
    </div>
  )
}

export default App;
