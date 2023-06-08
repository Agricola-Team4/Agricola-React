import React, { useState } from 'react';

export default function Fence({ ratio, isVertical, isActive }) {
  // const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${ratio} bg-fence	p-1 rounded-lg   
      ${isVertical ? '' : 'aspect-9/1'} ${
        isActive ? 'opacity-100' : 'opacity-20'
      }`}
      // onClick={() => {
      //   setIsActive(!isActive);
      // }}
    ></div>
  );
}
