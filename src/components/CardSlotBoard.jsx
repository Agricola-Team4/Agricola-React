import React from "react";
import Card from "./Card";
import { jobImages, majorImages, subImages } from "../constants/imageContants";

export default function CardSlotBoard({ name, bg, cardNum, ratio, close }) {
  console.log(name);
  // 주요설비 이미지
  // 보조설비 이미지
  // 직업카드 이미지
  const openCardSlot = (imageSet) => {
    return Object.values(jobImages).map((src) => (
      <Card cardType={src} ratio="basis-1/5"></Card>
    ));
  };

  return (
    <>
      <div
        style={{ top: "18%", left: "20%", height: "650px" }}
        className="absolute  w-7/12  p-6 bg-red-300"
      >
        <button
          className="bg-blue-700 text-white font-bold py-1 px-3 rounded-full absolute right-2 top-2 aspect-square transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer"
          onClick={close}
        >
          Ⅹ
        </button>

        <div className="flex flex-row flex-wrap w-full h-full box-border bg-orange-300">
          {Object.values(jobImages).map((src) => (
            <Card cardType={src} ratio="basis-1/7"></Card>
          ))}
        </div>
      </div>
    </>
  );
}
