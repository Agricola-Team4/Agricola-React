import React from 'react';
import Room from './Room';
import Field from './Field';
import Pen from './Pen';
import Empty from './Empty';
import { useBackgroundContext } from '../context/BackgroundContext';
import { buildFence } from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';

export default function Land({ data, pid }) {
  const { setPrompt, selectedPosArr, setSelectedPosArr } =
    useBackgroundContext();
  const { setIsFbActive, setIsAbActive, condition, setCondition } =
    useAuthContext();

  return (
    <div className="relative basis-9/31 aspect-square cursor-pointer transition duration-150 ease-in hover:scale-105 p-0.5 ">
      {
        {
          0: (
            <Empty
              isStable={false}
              onClick={
                {
                  1: () => {
                    // '울타리' 클릭 이벤트
                    const updatedPosArr = [...selectedPosArr, data.position];
                    setSelectedPosArr(updatedPosArr);
                    // handleAdd(data.position);
                    setPrompt({
                      message: '울타리를 치고 싶은 땅을 모두 선택하세요.',
                      buttons: [
                        {
                          text: '최종선택완료',
                          onClick: () => {
                            const pid = 1;
                            console.log('짝은어레이', updatedPosArr);
                            // buildFence(pid, [updatedPosArr]);
                            setPrompt({ message: '', buttons: [] });
                            setSelectedPosArr([]);
                            setIsFbActive(false);
                            setIsAbActive(true);
                            setCondition(0);
                          },
                        },
                        {
                          text: '이어서 치기',
                          onClick: () => {
                            console.log('이어서 치기', updatedPosArr);
                            // buildFence(pid, [updatedPosArr]);
                            setSelectedPosArr([]);
                          },
                        },
                      ],
                    });
                  },
                  2: () => {
                    // '농지' 클릭 이벤트

                    setCondition(0);
                  },
                  3: () => {
                    // '농장 확장' 클릭 이벤트

                    setCondition(0);
                  },
                }[condition]
              }
            />
          ),
          1: (
            <Room
              isFarmer={data && data.is_fam}
              type={data && data.room_type}
              pid={pid}
            />
          ),
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
