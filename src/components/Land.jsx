import React from 'react';
import Room from './Room';
import Field from './Field';
import Pen from './Pen';

export default function Land({ isRoom, isField, isPen }) {
  // {
  //   // isRoom: Boolean
  //   // isField: Boolean
  //   // isPen: Boolean
  //   type:
  //   Room:{
  //     isFarmer: Boolean
  //     type: String
  //   }
  //   Filed:{
  //     type: String
  //     num: Int
  //   }
  //   Pen:{
  //     isStable:  Boolean
  //     animalType: String
  //     num: Int
  //   }
  // }

  // const test

  // console.log(isRoom, isField, isPen);
  const type = 'field';

  return (
    // <div className="basis-8/28 bg-green-400 aspect-square cursor-pointer">
    <div className="basis-8/28 bg-green-400 aspect-square cursor-pointer">
      {
        {
          room: <Room />,
          field: <Field />,
        }[type]
      }
    </div>

    //   {/* {isRoom ? <Room /> : null}
    //   {isField ? <Field /> : null}
    //   {isPen ? <Pen /> : null}
    // </div> */}
  );
}
