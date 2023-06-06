import React from 'react';
import { playerRed, playerBlue } from '../constants/imageContants';

export default function Farmer({ isRed }) {
  return (
    <img
      className="w-4/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      src={isRed ? playerRed.farmer : playerBlue.farmer}
      alt="농부"
    />
  );
}
