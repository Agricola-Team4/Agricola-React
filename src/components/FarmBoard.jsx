import React from 'react';
import Fence from './Fence';
import Land from './Land';

export default function FarmBoard() {
  return (
    <section className="bg-blue-400 basis-8/12 mb-1 flex flex-wrap">
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>

      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />

      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>

      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />

      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>

      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />

      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>

      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />
      <Land />
      <Fence ratio="basis-1/19" height="h-24" />

      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
      <Fence ratio="basis-5/19" height="h-5" />
      <div className={'basis-1/19'}></div>
    </section>
  );
}
