import React from 'react';
import { resource } from '../constants/imageContants';

export default function Field({ type, num }) {
  return (
    <div className="bg-field bg-clip-border bg-contain bg-no-repeat rounded-lg w-full h-full  flex justify-center items-center p-2">
      {
        {
          0: <></>,
          1: (
            <img
              className="basis-6/12"
              style={{ height: 'auto', width: '13px' }}
              src={resource.grain}
              alt="작물"
            />
          ),
          2: (
            <img
              className="basis-6/12"
              style={{ height: 'auto', width: '13px' }}
              src={resource.vege}
              alt="채소"
            />
          ),
        }[type]
      }

      {type !== 0 && (
        <div className="basis-1/2 flex aspect-square justify-center items-center">
          <p className="basis-6/12 text-center aspect-square font-bold text-2xl text-white">
            {num}
          </p>
        </div>
      )}
    </div>
  );
}
