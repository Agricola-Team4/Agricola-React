import React from 'react';

export default function MajorCardBox({ ratio, isSquare, onClick }) {
  return (
    <div className={`${ratio} p-0.5`} onClick={onClick}>
      <div
        className={`${
          isSquare ? 'aspect-square' : ''
        }	 transition duration-150 ease-in hover:scale-105 cursor-pointer rounded-xl flex flex-col items-center  bg-majorCard bg-cover`}
      ></div>
    </div>
  );
}
