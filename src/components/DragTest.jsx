import { useState } from "react";
import { motion } from "framer-motion";

export default function DragTest() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    console.log(event.clientX, event.clientY);
    setMousePosition((prev) => ({ x: event.clientX, y: event.clientY }));
  };
  return (
    <div className="w-screen h-screen" onMouseMove={handleMouseMove}>
      <div
        style={{
          position: "absolute",
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          //   zIndex: 1,
          borderRadius: "50%",
          background: "red",
          width: "50px",
          height: "50px",
        }}
      >
        양
      </div>
    </div>
  );
}
