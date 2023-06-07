import React from 'react';
import Room from './Room';
import Field from './Field';
import Pen from './Pen';
import Empty from './Empty';

export default function Land({ isRoom, isField, isPen, type }) {
  return (
    <div className="relative basis-9/31 aspect-square cursor-pointer transition duration-150 ease-in hover:scale-105 p-0.5 ">
      {
        {
          room: <Room isFarmer={true} />,
          field: <Field />,
          pen: <Pen />,
          empty: <Empty />,
        }[type]
      }
    </div>

    //   {/* {isRoom ? <Room /> : null}
    //   {isField ? <Field /> : null}
    //   {isPen ? <Pen /> : null}
    // </div> */}
  );
}
