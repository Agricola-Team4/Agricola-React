import React from 'react';

export default function RoundBox({ ratio, round }) {
  return (
    <div className={`${ratio} p-0.5`}>
      <div
        className={`aspect-square cursor-pointer rounded-xl flex items-center justify-center border-2 border-yellow-700 text-4xl font-bold`}
      >
        {round}
      </div>
    </div>
  );
}
