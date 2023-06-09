import React from "react";
import Room from "./Room";
import Field from "./Field";
import Pen from "./Pen";
import Empty from "./Empty";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function Land({ data, pid }) {
  const { handleAdd, setPrompt, selectedPosArr } = useBackgroundContext();
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
                handleAdd(data.position);
                setPrompt({
                  message: "울타리를 치고 싶은 땅을 모두 선택하세요.",
                  buttons: [
                    {
                      text: "최종선택완료",
                      onClick: () => {
                        console.log("hello");
                        const pid = 1;
                        console.log("짝은어레이", selectedPosArr);
                        //   const fenceDataArray = buildFence(pid, [selectedPosArr]);
                        //   console.log(fenceDataArray);
                      },
                    },
                    {
                      text: "이어서 치기",
                      onClick: () => {
                        console.log("이어서 치기");
                      },
                    },
                  ],
                });
                console.log("??", selectedPosArr);
                // console.log("다시 prompt 업데이트");
              }}
            />
          ),
          1: <Room isFarmer={data && data.is_fam} type={"wood"} pid={pid} />,
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
