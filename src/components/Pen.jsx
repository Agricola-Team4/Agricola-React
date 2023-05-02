import React from "react";
import { playerRed, resource } from "../constants/imageContants";

export default function Pen() {
  return (
    <>
      <div className="transition duration-150 ease-in hover:scale-105 flex flex-wrap justify-center items-center p-2">
        <div className="basis-1/2 aspect-square flex justify-center items-center">
          <img
            className="basis-6/12"
            style={{ height: "auto", width: "40px" }}
            src={playerRed.stable}
            alt="외양간"
          />
        </div>
        <div className="basis-1/2"></div>
        <div className="basis-1/2 aspect-square flex justify-center items-center">
          <img
            className="basis-6/12"
            // style={{ height: "auto", width: "13px" }}
            src={resource.cow}
            alt="동물"
          />
        </div>
        <div className="basis-1/2 flex aspect-square justify-center items-center">
          <p className="basis-6/12 text-center aspect-square font-bold text-2xl rounded-full bg-white px-3">
            2
          </p>
        </div>
      </div>
    </>
  );
}
