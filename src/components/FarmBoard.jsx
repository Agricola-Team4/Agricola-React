import React from 'react';
import Fence from './Fence';
import Land from './Land';

export default function FarmBoard() {
  return (
    <section className="flex flex-wrap mb-1 ">
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>

      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />

      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>

      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />

      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>

      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />

      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>

      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />

      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>

      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/28" isVertical={true} />

      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
      <Fence ratio="basis-8/28" isVertical={false} />
      <div className="basis-1/28"></div>
    </section>
  );
}
