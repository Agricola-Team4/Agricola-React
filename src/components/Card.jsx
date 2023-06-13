import React from 'react';
import { jobImages } from '../constants/imageContants';
import { useBackgroundContext } from '../context/BackgroundContext';
import {
  activateCard,
  getCurrentRound,
  isRoundEnd,
  roundEnd,
  takeAction,
} from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';
import { useCardBoard } from '../hooks/useCardBoard';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useWebSocketContext } from '../context/WebSocketContext';
import useRoundArr from '../hooks/useRoundArr';

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
    openRoundCard,
    setIsEnd
  } = useBackgroundContext();
  const { socket } = useWebSocketContext();
  const { endRound } = useRoundArr();
  const { setIsAbActive, setIsCsActive, pid } = useAuthContext();
  const { useCard } = useCardBoard();
  const queryClient = useQueryClient();

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

  const clearPromptMsg = time => {
    setTimeout(() => {
      setPrompt({ message: '', buttons: [] });
    }, time);
  };

  return (
    <div
      className={`${ratio} flex justify-center items-center w-full h-1/2 p-2  bg-white`}
      onClick={async () => {
        console.log('card id : ', id, '를 activate 해야합니다');
        // takeAction(2, 21, id);

        if (condition === 9) {
          // 직접 activate card 시키기
          await activateCard(pid, id, socket);
          setPrompt({
            message: '카드가 활성화 되었습니다.',
            buttons: [],
          });
          queryClient.invalidateQueries(['haveCardData']);
          queryClient.invalidateQueries(['majorCardData']);
          queryClient.invalidateQueries(['actCardData']);
          queryClient.invalidateQueries(['actionBoard']);
          queryClient.invalidateQueries(['farmBoard']);
          queryClient.invalidateQueries(['resource']);
          setCondition(0);
          const isEnd = await isRoundEnd();
          isEnd &&
            roundEnd(socket, queryClient).then(async () => {
              openRoundCard();
              queryClient.invalidateQueries(['farmBoard']);
              queryClient.invalidateQueries(['actionBoard']);
              queryClient.invalidateQueries(['roundArray']);
              const a = await getCurrentRound();
              // console.log(a);
              // console.log(a.round);
              if (a[0].round === 8) {
                console.log('modal!');
                setIsEnd(true);
              }
            });
          clearPromptMsg(2000);
        } else {
          // 21 - 집개조,  23- 기본가족늘리기, 5 - 교습, 19- 곡식활용 중 빵굽기
          useCard.mutate({
            pid,
            aid: condition,
            cid: id,
            socket,
            queryClient,
          });
        }

        closeMajorSlot();
        closeP1HaveSlot();
        closeP1ActSlot();
        closeP2HaveSlot();
        closeP2ActSlot();

        const isEnd = await isRoundEnd();
        isEnd &&
          roundEnd(socket, queryClient).then(async () => {
            openRoundCard();
            queryClient.invalidateQueries(['farmBoard']);
            queryClient.invalidateQueries(['actionBoard']);
            queryClient.invalidateQueries(['roundArray']);
            const a = await getCurrentRound();
            // console.log(a);
            // console.log(a.round);
            if (a[0].round === 8) {
              console.log('modal!');
              setIsEnd(true);
            }
          });
        setIsAbActive(true);
        setIsCsActive(false);
        initCardActive();
      }}
    >
      <img
        className={`w-44 transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer ${
          isActive && !isActCardBoard && 'opacity-30'
        } ${
          ((isMcActive ? false : isActive) || !handleClickPossible()) &&
          'pointer-events-none'
        }`}
        src={cardPath}
        alt={cardPath}
      />
    </div>
  );
}
