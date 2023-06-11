import React from 'react';
import { jobImages } from '../constants/imageContants';
import { useBackgroundContext } from '../context/BackgroundContext';
import { takeAction } from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';
import { useCardBoard } from '../hooks/useCardBoard';

export default function Card({
  id,
  cardPath,
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
    condition,
    setCondition,
    isMcActive,
    isScActive,
    isJcActive,
    initCardActive,
  } = useBackgroundContext();

  const { setIsAbActive, setIsCsActive } = useAuthContext();
  const { useCard } = useCardBoard();

  const handleClickPossible = () => {
    if (0 < id && id <= 14) {
      // 직업카드
      if (isJcActive) return true;
      else return false;
    } else if (14 < id && id <= 28) {
      // 보조설비
      if (isScActive) return true;
      else return false;
    } else {
      // 주요설비
      if (isMcActive) return true;
      else return false;
    }
  };

  return (
    <div
      className={`${ratio} flex justify-center items-center w-full h-1/2 p-2  bg-white`}
      onClick={() => {
        console.log('card id : ', id, '를 activate 해야합니다');
        // takeAction(2, 21, id);
        const pid = 1;

        // 21 - 집개조,  23- 기본가족늘리기
        useCard.mutate({
          pid,
          aid: condition,
          cid: id,
        });
        closeMajorSlot();
        closeP1HaveSlot();
        closeP1ActSlot();
        closeP2HaveSlot();
        closeP2ActSlot();
        setPrompt({ message: '', buttons: [] });
        setCondition(0);
        setIsAbActive(true);
        setIsCsActive(false);
        initCardActive();
      }}
    >
      <img
        className={`w-44 transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer ${
          isActive && !isActCardBoard && 'opacity-30'
        } ${(isActive || !handleClickPossible()) && 'pointer-events-none'}`}
        src={cardPath}
        alt={cardPath}
      />
    </div>
  );
}
