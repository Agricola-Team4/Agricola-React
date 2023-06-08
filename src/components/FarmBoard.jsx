import React, { useEffect, useState } from 'react';
import Fence from './Fence';
import Land from './Land';
import { useAuthContext } from '../context/AuthContext';
import useFarmBoard from '../hooks/useFarmBoard';
import { useBackgroundContext } from '../context/BackgroundContext';

export default function FarmBoard({
  pid,
  fencePosArr,
  setFencePosArr,
  condition,
  setCondition,
}) {
  const { isFbActive } = useAuthContext();
  const {
    farmBoardQuery: { isLadoing, error, data },
  } = useFarmBoard(pid);
  // console.log(data);
  const { fencePosition1, fencePosition2 } = useBackgroundContext();
  const fencePosition = pid === 1 ? fencePosition1 : fencePosition2;
  const [arr, setArr] = useState([]);

  const handleAdd = num => {
    const aarr = [...arr];
    aarr.push(num);
    setArr(aarr);
  };

  useEffect(() => {
    if (arr.length > 0) {
      const box = [...fencePosArr];
      box.push(arr);
      setFencePosArr(box);
      setCondition(0);
      setArr([]);
      console.log(box);
    }
  }, [condition]);

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
      <Land
        data={
          data && { ...data.position_arr[0], animal_type: data.animal_type[0] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      {/* 1 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[5]}
      />
      <Land
        data={
          data && { ...data.position_arr[1], animal_type: data.animal_type[1] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      {/* 2 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[6]}
      />
      <Land
        data={
          data && { ...data.position_arr[2], animal_type: data.animal_type[2] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      {/* 3 */}
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
      <Land
        data={
          data && { ...data.position_arr[3], animal_type: data.animal_type[3] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[12]}
      />
      <Land
        data={
          data && { ...data.position_arr[4], animal_type: data.animal_type[4] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[13]}
      />
      <Land
        data={
          data && { ...data.position_arr[5], animal_type: data.animal_type[5] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
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
      <Land
        data={
          data && { ...data.position_arr[6], animal_type: data.animal_type[6] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[19]}
      />
      <Land
        data={
          data && { ...data.position_arr[7], animal_type: data.animal_type[7] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[20]}
      />
      <Land
        data={
          data && { ...data.position_arr[8], animal_type: data.animal_type[8] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
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
      <Land
        data={
          data && { ...data.position_arr[9], animal_type: data.animal_type[9] }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[26]}
      />
      <Land
        data={
          data && {
            ...data.position_arr[10],
            animal_type: data.animal_type[10],
          }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[27]}
      />
      <Land
        data={
          data && {
            ...data.position_arr[11],
            animal_type: data.animal_type[11],
          }
        }
        pid={pid}
        onAdd={handleAdd}
      />
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
      <Land
        data={
          data && {
            ...data.position_arr[12],
            animal_type: data.animal_type[12],
          }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[33]}
      />
      <Land
        data={
          data && {
            ...data.position_arr[13],
            animal_type: data.animal_type[13],
          }
        }
        pid={pid}
        onAdd={handleAdd}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[34]}
      />
      <Land
        data={
          data && {
            ...data.position_arr[14],
            animal_type: data.animal_type[14],
          }
        }
        pid={pid}
        onAdd={handleAdd}
      />
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
