import React from 'react';
import Fence from './Fence';
import Land from './Land';

export default function FarmBoard() {
  console.log('hello');
  return (
    <section className="flex flex-wrap mb-1 ">
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>

      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />

      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>

      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />

      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>

      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />

      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>

      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />

      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>

      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />
      <Land />
      <Fence ratio="basis-1/19" isVertical={true} />

      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
      <Fence ratio="basis-5/19" isVertical={false} />
      <div className="basis-1/19"></div>
    </section>
  );
}
