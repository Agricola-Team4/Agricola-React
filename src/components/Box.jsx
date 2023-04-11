import React from 'react';

export default function Box({ ratio, isSquare, bgColor }) {
  return (
    <div
      className={`${ratio} ${
        isSquare ? 'aspect-square' : ''
      }	 ${bgColor} bg-clip-content	p-1 transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer`}
    ></div>
  );
}
