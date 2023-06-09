import React from 'react';
import { useBackgroundContext } from '../context/BackgroundContext';

export default function MajorCardBox({ ratio, isSquare }) {
  const { openMajorSlot } = useBackgroundContext();

  return (
    <div className={`${ratio} p-0.5 z-0`} onClick={openMajorSlot}>
      <div
        className={`${
          isSquare ? 'aspect-square' : ''
        }	 transition duration-150 ease-in hover:scale-105 cursor-pointer rounded-xl flex flex-col items-center  bg-majorCard bg-cover ㅋ-`}
      ></div>
    </div>
  );
}
