import { useState } from 'react';
import { useBackgroundContext } from '../context/BackgroundContext';

export default function MouseComponent() {
  const { isAnimal } = useBackgroundContext();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    console.log(event.clientX, event.clientY);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen absolute border-2"
    >
      {isAnimal.visible && mousePosition && (
        <div
          className="flex justify-center items-center flex-wrap p-2"
          style={{
            position: 'absolute',
            top: `${mousePosition.y - 200}px`,
            left: `${mousePosition.x - 200}px`,
            zIndex: 1,
            // borderRadius: "50%",
            background: 'white',
            border: '1px black solid',
            width: '200px',
            // height: "50px",
          }}
        >
          {Array(isAnimal.num)
            .fill()
            .map((_, index) => isAnimal.img)}
          {/* {isAnimal.img}
            <p className="font-bold pl-2">{isAnimal.num}</p> */}
        </div>
      )}
    </div>
  );
}
