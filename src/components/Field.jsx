import React from 'react';
import { resource } from '../constants/imageContants';

export default function Field() {
  return (
    <>
      <div className="bg-field bg-clip-border bg-contain bg-no-repeat w-full h-full transition duration-150 ease-in hover:scale-105 flex justify-center items-center p-2">
        <img
          className="basis-6/12"
          style={{ height: 'auto', width: '13px' }}
          src={resource.grain}
          alt="작물"
        />
        <div className="basis-1/2 flex aspect-square justify-center items-center">
          <p className="basis-6/12 text-center aspect-square font-bold text-2xl text-white">
            2
          </p>
        </div>
      </div>
    </>
  );
}
