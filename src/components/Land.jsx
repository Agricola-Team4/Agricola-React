import React from 'react';
import Room from './Room';
import Field from './Field';
import Pen from './Pen';
import Empty from './Empty';

export default function Land({ data, pid, onAdd }) {
  return (
    <div
      className="relative basis-9/31 aspect-square cursor-pointer transition duration-150 ease-in hover:scale-105 p-0.5 "
      // onClick={() => console.log('hello')}
    >
      {
        {
          0: (
            <Empty
              isStable={false}
              onClick={() => {
                onAdd(data.position);
              }}
            />
          ),
          1: <Room isFarmer={data && data.is_fam} type={'wood'} pid={pid} />,
          2: (
            <Field type={data && data.vege_type} num={data && data.vege_num} />
          ),
          3: (
            <Pen
              isStable={false}
              type={data && data.animal_type}
              num={data && data.animal_num}
            />
          ),
          4: <Empty isStable={true} />,
          5: (
            <Pen
              isStable={true}
              type={data && data.animal_type}
              num={data && data.animal_num}
            />
          ),
        }[data && data.position_type]
      }
    </div>
  );
}
