import React from 'react';
import Farmer from './Farmer';

export default function ActionBox({ ratio, isSquare, actionProperty }) {
  const { title, isAccumul, isOcuupied, onClick, childTags, pid } =
    actionProperty;
  return (
    <div className={`${ratio} p-0.5 relative `} onClick={onClick}>
      <div
        className={`${
          isSquare ? 'aspect-square' : 'h-full'
        }	 transition duration-150 ease-in hover:scale-105 cursor-pointer rounded-xl flex flex-col items-center border-2 border-yellow-700`}
      >
        <p className="py-1 text-xs font-bold basis-1/5 bg-gray-100 w-full text-center rounded-t-xl border-b-2 border-yellow-700 flex items-center justify-center">
          {title}
        </p>
        <div
          className={` h-full text-xs basis-4/5 ${
            isAccumul ? 'bg-yellow-300' : 'bg-yellow-200'
          }  w-full text-center rounded-b-xl flex justify-center items-center`}
        >
          {childTags}
        </div>
        {isOcuupied && <Farmer isRed={pid % 2} />}
      </div>
    </div>
  );
}