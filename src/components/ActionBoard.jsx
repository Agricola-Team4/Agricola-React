import React from 'react';
import Box from './Box';

export default function ActionBoard() {
  return (
    <div className="flex flex-wrap ">
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <div className="basis-1/5 aspect-square flex flex-col">
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-600'} />
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-600'} />
      </div>
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <div className="basis-2/5   flex flex-wrap">
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-400'} />
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-400'} />
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-400'} />
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-400'} />
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-400'} />
        <Box ratio="basis-1/2" isSquare={false} bgColor={'bg-red-400'} />
      </div>
      <div className="basis-2/5 aspect-square	  flex flex-wrap">
        <Box ratio="basis-1/2" isSquare={true} bgColor={'bg-red-200'} />
        <Box ratio="basis-1/2" isSquare={true} bgColor={'bg-red-200'} />
        <Box ratio="basis-1/2" isSquare={true} bgColor={'bg-red-200'} />
        <Box ratio="basis-1/2" isSquare={true} bgColor={'bg-red-200'} />
      </div>
      <div className="basis-1/5"></div>
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
      <Box ratio="basis-1/5" isSquare={true} bgColor={'bg-red-200'} />
    </div>
  );
}
