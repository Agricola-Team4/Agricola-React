import React from 'react';
import Fence from './Fence';
import Land from './Land';
import { useAuthContext } from '../context/AuthContext';
import useFarmBoard from '../hooks/useFarmBoard';
import { useBackgroundContext } from '../context/BackgroundContext';

export default function FarmBoard({ pid }) {
  const { isFbActive } = useAuthContext();
  const {
    farmBoardQuery: { isLadoing, error, data },
  } = useFarmBoard(pid);
  // console.log("data", data);
  const { fencePosition1, fencePosition2 } = useBackgroundContext();
  const fencePosition = pid === 1 ? fencePosition1 : fencePosition2;

  return (
    <section
      className={`flex flex-wrap mb-1 ${!isFbActive && 'pointer-events-none'}`}
    >
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[1]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[2]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[3]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[4]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[0],
            animal_type: data.animal_type[0],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      {/* 1 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[5]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[1],
            animal_type: data.animal_type[1],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      {/* 2 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[6]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[2],
            animal_type: data.animal_type[2],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      {/* 3 */}
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[7]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[8]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[9]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[10]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[11]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[3],
            animal_type: data.animal_type[3],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[12]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[4],
            animal_type: data.animal_type[4],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[13]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[5],
            animal_type: data.animal_type[5],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[14]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[15]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[16]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[17]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[18]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[6],
            animal_type: data.animal_type[6],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[19]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[7],
            animal_type: data.animal_type[7],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[20]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[8],
            animal_type: data.animal_type[8],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[21]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[22]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[23]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[24]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[25]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[9],
            animal_type: data.animal_type[9],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[26]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[10],
            animal_type: data.animal_type[10],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[27]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[11],
            animal_type: data.animal_type[11],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[28]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[29]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[30]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[31]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[32]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[12],
            animal_type: data.animal_type[12],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[33]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[13],
            animal_type: data.animal_type[13],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[34]}
        pid={pid}
      />
      <Land
        data={
          data && {
            ...data.position_arr[14],
            animal_type: data.animal_type[14],
            room_type: data.house_type,
          }
        }
        pid={pid}
      />
      <Fence
        ratio="basis-1/31"
        isVertical={true}
        isActive={fencePosition && fencePosition[35]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[36]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[37]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
      <Fence
        ratio="basis-9/31"
        isVertical={false}
        isActive={fencePosition && fencePosition[38]}
        pid={pid}
      />
      <div className="basis-1/31"></div>
    </section>
  );
}
