import React from "react";
import Farmer from "./Farmer";

export default function Room() {
  const isFarmer = true;

  return (
    <>
      <div className="bg-woodRoom bg-clip-border bg-contain bg-no-repeat w-full h-full transition duration-150 ease-in hover:scale-105 flex justify-center items-center">
        {isFarmer && <Farmer />}
      </div>
    </>
  );
}
