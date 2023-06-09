import React from "react";
import { jobImages } from "../constants/imageContants";

export default function Card({ id, cardType, ratio }) {
  return (
    <>
      <div
        className={`${ratio} flex justify-center items-center w-full h-1/2 p-2  bg-white`}
        onClick={() => {
          console.log("card id : ", id, "를 activate 해야합니다");
        }}
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
