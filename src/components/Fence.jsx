import React from 'react';

export default function Fence({ ratio, isVertical, isActive, pid }) {
  return (
    <div
      className={`${ratio} ${
        pid % 2 ? 'bg-fenceRed' : 'bg-fenceBlue'
      }	rounded-lg border-2 border-black 
      ${isVertical ? '' : 'aspect-9/1'} ${
        isActive ? 'opacity-100' : 'opacity-10'
      }`}
    ></div>
  );
}
