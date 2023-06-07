import React from 'react';
import Fence from './Fence';
import Land from './Land';

export default function FarmBoard() {
  return (
    <section className="flex flex-wrap mb-1 ">
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land isRoom={true} isField={false} isPen={false} type="room" /> {/* 1 */}
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land isRoom={true} isField={false} isPen={false} type="room" /> {/* 2 */}
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" /> {/* 3 */}
      <Fence ratio="basis-1/31" isVertical={true} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land isRoom={false} isField={true} isPen={false} type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land isRoom={false} isField={false} isPen={true} type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="field" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="pen" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <Land type="empty" />
      <Fence ratio="basis-1/31" isVertical={true} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
      <Fence ratio="basis-9/31" isVertical={false} />
      <div className="basis-1/31"></div>
    </section>
  );
}
