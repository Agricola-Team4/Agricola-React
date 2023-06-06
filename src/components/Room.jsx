import React from 'react';
import Farmer from './Farmer';
import { useAuthContext } from '../context/AuthContext';

export default function Room({ isFarmer }) {
  const { pid } = useAuthContext();
  return (
    <>
      <div className="bg-woodRoom bg-clip-border bg-contain bg-no-repeat rounded-lg w-full h-full flex justify-center items-center">
        {isFarmer && <Farmer isRed={pid % 2} />}
      </div>
    </>
  );
}
