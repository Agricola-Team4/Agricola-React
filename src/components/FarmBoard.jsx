import React from 'react';
import Fence from './Fence';
import Land from './Land';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';
import useFarmBoard from '../hooks/useFarmBoard';

export default function FarmBoard({ fencePosition }) {
  const { isFbActive } = useAuthContext();
  const {
    farmBoardQuery: { isLadoing, error, data },
  } = useFarmBoard();

  console.log(data);

  // const [arr, setArr] = useState([]);

  return (
    <section
      className={`flex flex-wrap mb-1 ${!isFbActive && 'pointer-events-none'}`}
    >
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[1]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[2]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[3]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[4]}
      />
      <Land data={data && data[0]} /> {/* 1 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[5]}
      />
      <Land data={data && data[1]} /> {/* 2 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[6]}
      />
      <Land data={data && data[2]} /> {/* 3 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[7]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[8]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[9]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[10]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[11]}
      />
      <Land data={data && data[3]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[12]}
      />
      <Land data={data && data[4]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[13]}
      />
      <Land data={data && data[5]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[14]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[15]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[16]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[17]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[18]}
      />
      <Land data={data && data[6]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[19]}
      />
      <Land data={data && data[7]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[20]}
      />
      <Land data={data && data[8]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[21]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[22]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[23]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[24]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[25]}
      />
      <Land data={data && data[9]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[26]}
      />
      <Land data={data && data[10]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[27]}
      />
      <Land data={data && data[11]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[28]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[29]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[30]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[31]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[32]}
      />
      <Land data={data && data[12]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[33]}
      />
      <Land data={data && data[13]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[34]}
      />
      <Land data={data && data[14]} />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[35]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[36]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[37]}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[38]}
      />
      <div className="basis-1/31"></div>
    </section>
  );
}
