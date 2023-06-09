import React from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import { majorImages } from "../constants/imageContants";
import { useAuthContext } from "../context/AuthContext";

export default function CardSlotBoard({
  condition,
  imageSet,
  height,
  width,
  ratio,
  close,
  isActCardBoard,
}) {
  console.log("card slot condition", condition);
  const { isCsActive } = useAuthContext();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ height: `${height}px`, width: `${width}px` }}
          // style={{ top: "18%", left: "20%", height: "650px" }}
          className="absolute w-fit py-8 px-10 bg-yellow-200 rounded-lg border-8 border-yellow-700"
        >
          {/* w-7/12 */}
          <button
            className="bg-red-700 text-white font-bold py-1 px-3 rounded-full absolute right-3 top-3 aspect-square transition duration-150 ease-out hover:ease-in hover:scale-105 cursor-pointer"
            onClick={close}
          >
            Ⅹ
          </button>

          {condition ? (
            <div
              className={`flex flex-row flex-wrap w-full h-full box-border bg-white ${
                !isCsActive && "pointer-events-none"
              }`}
            >
              {Object.values(imageSet).map((data) => (
                <Card
                  key={data.id}
                  id={data.id}
                  cardPath={data.path}
                  ratio={ratio}
                  isActive={data.activated}
                  isActCardBoard={isActCardBoard}
                ></Card>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center bg-white w-full h-full">
              <p className="text-2xl font-bold">Empty</p>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
