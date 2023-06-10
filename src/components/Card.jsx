import React from 'react';
import { jobImages } from '../constants/imageContants';
import { useBackgroundContext } from '../context/BackgroundContext';
import { takeAction } from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';
import { useCardBoard } from '../hooks/useCardBoard';

export default function Card({
  id,
  cardType,
  ratio,
  isActive,
  isActCardBoard,
}) {
  const {
    closeMajorSlot,
    closeP1HaveSlot,
    closeP1ActSlot,
    closeP2HaveSlot,
    closeP2ActSlot,
    setPrompt,
  } = useBackgroundContext();

  const { setIsFbActive, setIsAbActive } = useAuthContext();
  const { useCard } = useCardBoard();

  return (
    <div
      className={`${ratio} flex justify-center items-center w-full h-1/2 p-2  bg-white`}
      onClick={() => {
        console.log('card id : ', id, '를 activate 해야합니다');
        // takeAction(2, 21, id);
        const pid = 1;
        useCard.mutate({ pid, cid: id });
        closeMajorSlot();
        closeP1HaveSlot();
        closeP1ActSlot();
        closeP2HaveSlot();
        closeP2ActSlot();
        setPrompt({ message: '', buttons: [] });
        setIsAbActive(true);
      }}
    >
      <img
        className={`w-44 transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer ${
          isActive && !isActCardBoard && 'opacity-30 pointer-events-none'
        }`}
        // h-full
        src={cardType}
        alt={cardType}
      />
    </div>
  );
}
