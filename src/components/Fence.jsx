import React, { useState } from 'react';

export default function Fence({ ratio, height }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${ratio} bg-yellow-500 bg-clip-content p-1 ${height} transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer hover:opacity-100 ${
        isActive ? '' : 'opacity-50'
      }`}
      onClick={() => setIsActive(!isActive)}
    ></div>
  );
}
