
import React from 'react';
import { playerRed, resource } from '../constants/imageContants';
import { getResourceNumById, raiseAnimal } from '../api/agricola';
import { useBackgroundContext } from '../context/BackgroundContext';
import { useAuthContext } from '../context/AuthContext';
import { useQueryClient } from '@tanstack/react-query';


export default function Pen({ isStable, type, num, position }) {
  const { setPrompt } = useBackgroundContext();
  const { setIsFbActive, setIsAbActive } = useAuthContext();
  const queryClient = useQueryClient();
  return (
    <div
      className="bg-empty bg-clip-border bg-contain bg-no-repeat flex flex-wrap justify-center items-center p-2"

      onClick={async () => {
        console.log('hello');

        const pid = 1;
        const sheepNum = await getResourceNumById(pid, 7);
        if (sheepNum > 0) {
          raiseAnimal(pid, 1, position)
            .then(() => {
              queryClient.invalidateQueries(['resource']);
              queryClient.invalidateQueries(['farmBoard']);
            })
            .catch(() => {
              setPrompt({ message: '', buttons: [] });
              setIsFbActive(false);
              setIsAbActive(true);
            });
        } else {
          setPrompt({ message: '', buttons: [] });
          setIsFbActive(false);
          setIsAbActive(true);
        }
      }}
    >
      <div className="basis-1/2 aspect-square flex justify-center items-center">
        {isStable && (
          <img
            className="basis-6/12"
            style={{ height: "auto", width: "40px" }}
            src={playerRed.stable}
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
