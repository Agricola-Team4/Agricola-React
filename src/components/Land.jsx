import React from 'react';
import Room from './Room';
import Field from './Field';
import Pen from './Pen';
import Empty from './Empty';
import { useBackgroundContext } from '../context/BackgroundContext';
import {
  buildFence,
  takeAction,
  constructLand,
  updatePenInFarmboard,
  createPenposition,
} from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';
import { useActionBoard } from '../hooks/useActionBoard';
import { useQueryClient } from '@tanstack/react-query';
import { fencePos } from '../constants/fencePos';

export default function Land({ data, pid }) {
  const {
    setPrompt,
    selectedPosArr,
    setSelectedPosArr,
    validLandArr,
    condition,
    setCondition,
    fencePosition1,
    setFencePosition1,
  } = useBackgroundContext();

  const { setIsFbActive, setIsAbActive } = useAuthContext();

  const queryClient = useQueryClient();

  const updateFenceposition = (pos, fencePosition, setFencePosition) => {
    const box = { ...fencePosition };
    box[fencePos[pos].top] = true;
    box[fencePos[pos].left] = true;
    box[fencePos[pos].right] = true;
    box[fencePos[pos].bottom] = true;
    // console.log(box);
    // for (let a of arr) {
    //   box[farmBoard[a.position_id].top] = a.top;
    //   box[farmBoard[a.position_id].left] = a.left;
    //   box[farmBoard[a.position_id].right] = a.right;
    //   box[farmBoard[a.position_id].bottom] = a.bottom;
    // }
    setFencePosition(box);
  };

  return (
    <div className="relative basis-9/31 aspect-square cursor-pointer transition duration-150 ease-in hover:scale-105 p-0.5 ">
      {
        {
          0: (
            <Empty
              isStable={false}
              onClick={async () => {
                if (condition === 1) {
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
                } else if (condition === 2) {
                  // '농지' 클릭 이벤트
                  const clickedLand = data.position;
                  // 유효한 땅인지 검사하기
                  let player_id;
                  if (pid % 2 === 0) {
                    player_id = 2;
                  } else {
                    player_id = 1;
                  }
                  // console.log("vd", validLandArr);
                  console.log('땅넘버', clickedLand);
                  console.log('validarr', validLandArr);
                  if (validLandArr.includes(clickedLand)) {
                    // 밭 짓기
                    await constructLand(pid, clickedLand);
                    console.log('pid??', pid);

                    setPrompt({ message: '', buttons: [] });
                    setCondition(0);
                    setIsFbActive(true);
                    setIsAbActive(true);
                  } else {
                    setPrompt({
                      message:
                        '그곳에는 밭을 지을 수 없습니다. 다른 밭을 선택하세요.',
                      buttons: [],
                    });
                  }
                  return queryClient.invalidateQueries([
                    'farmBoard',
                    player_id,
                  ]);
                } else if (condition === 3) {
                  setCondition(0);
                } else if (condition === -1) {
                  // build fence 대안용
                  const pid = 1;
                  await updatePenInFarmboard(pid, data.position);
                  await createPenposition(pid, data.position);
                  updateFenceposition(
                    data.position,
                    fencePosition1,
                    setFencePosition1
                  );
                  queryClient.invalidateQueries(['farmBoard', pid]);
                  setPrompt({ message: '', buttons: [] });
                  setIsFbActive(false);
                  setIsAbActive(true);
                  setCondition(0);
                  // setPrompt({
                  //   message: '울타리를 치고 싶은 땅을 모두 선택하세요.',
                  //   buttons: [
                  //     {
                  //       text: '최종선택완료',
                  //       onClick: () => {
                  //         const pid = 1;
                  //         console.log('짝은어레이');
                  //         setPrompt({ message: '', buttons: [] });

                  //         setIsFbActive(false);
                  //         setIsAbActive(true);
                  //         setCondition(0);
                  //       },
                  //     },
                  //     {
                  //       text: '이어서 치기',
                  //       onClick: () => {
                  //         console.log('이어서 치기');
                  //       },
                  //     },
                  //   ],
                  // });
                }
              }}
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
              position={data && data.position}
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
