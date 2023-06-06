import React from "react";
import { jobImages } from "../constants/imageContants";

export default function Card({ cardType, ratio }) {
  console.log("cardType이 무엇이냐" + cardType);
  return (
    <>
      <div
        className={`${ratio} flex justify-center items-center w-full h-1/2 p-2  bg-white`}
      >
        <img
          className="w-44 transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer"
          // h-full
          src={cardType}
          alt={cardType}
        />
      </div>
    </>
  );
}
