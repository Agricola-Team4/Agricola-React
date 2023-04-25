import React, { useState } from 'react';

export default function Fence({ ratio, isVertical }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${ratio} bg-orange-500 transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer hover:opacity-100
      ${isVertical ? '' : 'aspect-15/2'} ${isActive ? '' : 'opacity-20'}`}
      onClick={() => {
        setIsActive(!isActive);
      }}
    ></div>
  );
}
