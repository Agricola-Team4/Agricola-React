import ActionBoard from './components/ActionBoard';
import CardSlot from './components/CardSlot';
import { useState } from 'react';
import CardSlotBoard from './components/CardSlotBoard';

function App() {
  const [isCardSlotOpen, setIsCardSlotOpen] = useState(false);

  const openCardSlot = ()=>setIsCardSlotOpen(true)
  const closeCardSlot = ()=>setIsCardSlotOpen(false)

  return (
    <>
      <ActionBoard />
      <CardSlotBoard img="../../public/img/majors_bg.jpg" col="5" row="2" />
    </>
  )
}

export default App;
