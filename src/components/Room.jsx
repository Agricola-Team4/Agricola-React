import React from 'react';
import Farmer from './Farmer';
import { useBackgroundContext } from '../context/BackgroundContext';

export default function Room({ isFarmer, pid, type }) {
  const { setPrompt } = useBackgroundContext();

  return (
    <>
      <div
        className={`${
          {
            0: 'bg-woodRoom',
            1: 'bg-soilRoom',
            2: 'bg-stoneRoom',
          }[type]
        } bg-clip-border bg-contain bg-no-repeat rounded-lg w-full h-full flex justify-center items-center`}
        onClick={() => {
          console.log('자 이제 프롬프트 테스트를 해볼거야');
          setPrompt({
            message: '프롬프트 테스트입니다.',
            buttons: [
              {
                text: '선택완료',
                onClick: () => {
                  console.log('hello');
                },
              },
              {
                text: '최종선택완료',
                onClick: () => {
                  console.log('hello2');
                },
              },
            ],
          });
        }}
      >
        {isFarmer && <Farmer isRed={pid % 2} />}
      </div>
    </>
  );
}
