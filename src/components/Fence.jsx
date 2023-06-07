import React, { useState } from 'react';

export default function Fence({ ratio, isVertical }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${ratio} bg-fence	p-1 rounded-lg transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer hover:opacity-100
      ${isVertical ? '' : 'aspect-9/1'} ${isActive ? '' : 'opacity-20'}`}
      onClick={() => {
        setIsActive(!isActive);
      }}
    ></div>
  );
}
