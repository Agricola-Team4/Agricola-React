import React from "react";
import Room from "./Room";
import Field from "./Field";
import Pen from "./Pen";

export default function Land({ isRoom, isField, isPen }) {
  console.log(isRoom, isField, isPen);

  return (
    <div className="basis-8/28 bg-green-400 aspect-square cursor-pointer">
      {isRoom ? <Room /> : null}
      {isField ? <Field /> : null}
      {isPen ? <Pen /> : null}
    </div>
  );
}
