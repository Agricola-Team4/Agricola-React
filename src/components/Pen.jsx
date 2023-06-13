import React from 'react';
import { playerRed, playerBlue, resource } from '../constants/imageContants';
import {
  getCurrentRound,
  getResourceNumById,
  isRoundEnd,
  raiseAnimal,
  roundEnd,
} from '../api/agricola';
import { useBackgroundContext } from '../context/BackgroundContext';
import { useAuthContext } from '../context/AuthContext';
import { useQueryClient } from '@tanstack/react-query';
import { useWebSocketContext } from '../context/WebSocketContext';
import useRoundArr from '../hooks/useRoundArr';

export default function Pen({ isStable, type, num, position, pid }) {
  const { setPrompt, openRoundCard,setIsEnd } = useBackgroundContext();
  const { setIsFbActive, setIsAbActive } = useAuthContext();
  const { socket } = useWebSocketContext();
  const queryClient = useQueryClient();
  const clearPromptMsg = time => {
    setTimeout(() => {
      setPrompt({ message: '', buttons: [] });
    }, time);
  };
  const endRound = useRoundArr();
  return (
    <div
      className="bg-empty bg-clip-border bg-contain bg-no-repeat flex flex-wrap justify-center items-center p-2"
      onClick={async () => {
        const sheepNum = await getResourceNumById(pid, 7);

        if (sheepNum > 0) {
          raiseAnimal(pid, 1, position, socket)
            .then(async () => {
              queryClient.invalidateQueries(['resource']);
              queryClient.invalidateQueries(['farmBoard']);
              const isEnd = await isRoundEnd();
              // isEnd && endRound.mutate({ socket, queryClient });
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
              setIsFbActive(false);
              setIsAbActive(true);
            })
            .catch(async err => {
              setPrompt({
                message: '우리의 수용량을 초과하였습니다.',
                buttons: [],
              });
              const isEnd = await isRoundEnd();
              // isEnd && endRound.mutate({ socket, queryClient });
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
              setIsFbActive(false);
              setIsAbActive(true);
            });
          console.log('hello');
        } else {
          setPrompt({
            message: '사용할 수 있는 가축이 없습니다.',
            buttons: [],
          });
        }
      }}
    >
      <div className="basis-1/2 aspect-square flex justify-center items-center">
        {isStable && (
          <img
            className="basis-6/12"
            style={{ height: 'auto', width: '40px' }}
            src={pid % 2 ? playerRed.stable : playerBlue.stable}
            alt="외양간"
          />
        )}
      </div>
      <div className="basis-1/2"></div>
      <div className="basis-1/2 aspect-square flex justify-center items-center">
        {
          {
            0: <></>,
            1: <img className="basis-6/12" src={resource.sheep} alt="양" />,
            2: <img className="basis-6/12" src={resource.boar} alt="돼지" />,
            3: <img className="basis-6/12" src={resource.cow} alt="소" />,
          }[type]
        }
      </div>
      {num !== 0 && (
        <div className="basis-1/2 flex aspect-square justify-center items-center bg-white rounded-full">
          <p className="font-bold text-xl">{num}</p>
        </div>
      )}
    </div>
  );
}
