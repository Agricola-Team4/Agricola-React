import React from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
// import { jobImages, majorImages, subImages } from "../constants/imageContants";

export default function CardSlotBoard({ imageSet, col, row, ratio, close }) {
  console.log('???', imageSet);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{ height: '650px', width: '1000px' }}
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

          <div className="flex flex-row flex-wrap w-full h-full box-border bg-white">
            {Object.values(imageSet).map(src => (
              <Card cardType={src} ratio={ratio}></Card>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function getPlayerCard() {
  const player1_cardSet = [];
  const player2_cardSet = [];
  const allCards = await axios
    .get('http://3.36.7.233:3000/playercard/')
    .then(res => res.data);

  return allCards;
  // return [player1_cardSet, player2_cardSet];
}
