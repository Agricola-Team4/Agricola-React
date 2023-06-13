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
  constructRoom,
  getAvailableSlot,
  constructStable,
  isRoundEnd,
  roundEnd,
  getCurrentRound,
} from '../api/agricola';
import { useAuthContext } from '../context/AuthContext';
import { useActionBoard } from '../hooks/useActionBoard';
import { useQueryClient } from '@tanstack/react-query';
// import { fencePos } from '../constants/fencePos';
import { useWebSocketContext } from '../context/WebSocketContext';
import useRoundArr from '../hooks/useRoundArr';

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
    fencePosition2,
    setFencePosition2,
    validRoomArr,
    setValidRoomArr,
    validStableArr,
    setValidStableArr,
    openRoundCard,
    fencePosArr,
    setFencePosArr,
    setIsEnd
  } = useBackgroundContext();

  const fencePos = {
    1: {
      top: 1,
      left: 4,
      right: 5,
      bottom: 8,
    },
    2: {
      top: 2,
      left: 5,
      right: 6,
      bottom: 9,
    },
    3: {
      top: 3,
      left: 6,
      right: 7,
      bottom: 10,
    },
    4: {
      top: 8,
      left: 11,
      right: 12,
      bottom: 15,
    },
    5: {
      top: 9,
      left: 12,
      right: 13,
      bottom: 16,
    },
    6: {
      top: 10,
      left: 13,
      right: 14,
      bottom: 17,
    },
    7: {
      top: 15,
      left: 18,
      right: 19,
      bottom: 22,
    },
    8: {
      top: 16,
      left: 19,
      right: 20,
      bottom: 23,
    },
    9: {
      top: 17,
      left: 20,
      right: 21,
      bottom: 24,
    },
    10: {
      top: 22,
      left: 25,
      right: 26,
      bottom: 29,
    },
    11: {
      top: 23,
      left: 26,
      right: 27,
      bottom: 30,
    },
    12: {
      top: 24,
      left: 27,
      right: 28,
      bottom: 31,
    },
    13: {
      top: 29,
      left: 32,
      right: 33,
      bottom: 36,
    },
    14: {
      top: 30,
      left: 33,
      right: 34,
      bottom: 37,
    },
    15: {
      top: 31,
      left: 34,
      right: 35,
      bottom: 38,
    },
  };

  const { socket } = useWebSocketContext();
  const endRound = useRoundArr();
  const { setIsFbActive, setIsAbActive } = useAuthContext();

  const queryClient = useQueryClient();

  const updateFenceposition = (pos, fencePosition, setFencePosition) => {
    const box = { ...fencePosition };
    box[fencePos[pos].top] = true;
    box[fencePos[pos].left] = true;
    box[fencePos[pos].right] = true;
    box[fencePos[pos].bottom] = true;
    setFencePosition(box);
  };
  const clearPromptMsg = time => {
    setTimeout(() => {
      setPrompt({ message: '', buttons: [] });
    }, time);
  };
  return (
    <div className="relative basis-9/31 aspect-square cursor-pointer transition duration-150 ease-in hover:scale-105 p-0.5 ">
      {
        {
          0: (
            <Empty
              isStable={false}
              pid={pid}
              onClick={async () => {
                if (condition === 1) {
                  // '울타리' 클릭 이벤트
                  const updatedPosArr = [...selectedPosArr, data.position];
                  setSelectedPosArr(updatedPosArr);
                  // handleAdd(data.position);
                  console.log(updatedPosArr);
                  setPrompt({
                    message: '울타리를 치고 싶은 땅을 모두 선택하세요.',
                    buttons: [
                      {
                        text: '최종선택완료',
                        onClick: () => {
                          console.log('짝은어레이', updatedPosArr);
                          buildFence(pid, fencePosArr, socket).then(res => {
                            console.log(res);
                          });
                          setPrompt({ message: '', buttons: [] });
                          setFencePosArr([]);
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
                          const a = [...fencePosArr, updatedPosArr];
                          setFencePosArr(a);
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
                    await constructLand(pid, clickedLand, socket);
                    console.log('pid??', pid);

                    setPrompt({ message: '', buttons: [] });
                    setCondition(0);
                    setIsFbActive(true);
                    setIsAbActive(true);
                    const isEnd = await isRoundEnd();
                    isEnd &&
                      roundEnd(socket, queryClient).then(async () => {
                        openRoundCard();
                        queryClient.invalidateQueries(['farmBoard']);
                        queryClient.invalidateQueries(['actionBoard']);
                        queryClient.invalidateQueries(['roundArray']);
                        const a = await getCurrentRound();
                        // console.log(a);
                        // console.log(a.round);
                        if (a[0].round === 8) {
                          console.log('modal!');
                          setIsEnd(true);
                        }
                      });
                  } else {
                    setPrompt({
                      message:
                        '그곳에는 밭을 지을 수 없습니다. 다시 선택하세요.',
                      buttons: [],
                    });
                  }
                  return queryClient.invalidateQueries([
                    'farmBoard',
                    player_id,
                  ]);
                } else if (condition === 3) {
                  const clickedLand = data.position;
                  console.log('선택된 땅은 : ', clickedLand);

                  if (validRoomArr.includes(clickedLand)) {
                    console.log('유효한 번호입니다.');
                    await constructRoom(pid, clickedLand, socket);
                    queryClient.invalidateQueries(['farmBoard', pid]);
                    queryClient.invalidateQueries(['resource']);

                    // setPrompt({
                    //   message: "방이 만들어졌습니다.",
                    //   buttons: [],
                    // });
                    // clearPromptMsg();
                    // 3초
                    console.log('방 만들기 끝');

                    setPrompt({
                      message: '외양간을 지으시겠습니까?',
                      buttons: [
                        {
                          text: 'Yes',
                          onClick: async () => {
                            console.log('외양간을 지어보자');
                            const available_stable_Arr = await getAvailableSlot(
                              pid,
                              'cowshed'
                            );
                            console.log(
                              'getavailabeldSlot 외양간 ver ! pid :',
                              pid,
                              available_stable_Arr
                            );
                            setValidStableArr(available_stable_Arr);

                            setPrompt({
                              message:
                                '외양간을 만들고 싶은 곳을 선택해주세요.',
                              buttons: [],
                            });

                            console.log('condition 4로 만들기');
                            setCondition(4);
                          },
                        },
                        {
                          text: 'No',
                          onClick: async () => {
                            setPrompt({
                              message: '행동이 종료되었습니다.',
                              buttons: [],
                            });
                            const isEnd = await isRoundEnd();
                            isEnd &&
                              roundEnd(socket, queryClient).then(async () => {
                                openRoundCard();
                                queryClient.invalidateQueries(['farmBoard']);
                                queryClient.invalidateQueries(['actionBoard']);
                                queryClient.invalidateQueries(['roundArray']);
                                const a = await getCurrentRound();
                                // console.log(a);
                                // console.log(a.round);
                                if (a[0].round === 8) {
                                  console.log('modal!');
                                  setIsEnd(true);
                                }
                              });
                            clearPromptMsg(3000);
                            setCondition(0);
                            setIsAbActive(true);
                            setIsFbActive(false);
                          },
                        },
                      ],
                    });
                  } else {
                    setPrompt({
                      message:
                        '그곳에는 방을 만들 수 없습니다. 다시 선택하세요.',
                      buttons: [],
                    });
                    setCondition(3);
                  }
                  // setCondition(0);
                  setIsFbActive(true);
                  setIsAbActive(true);
                  return queryClient.invalidateQueries(['farmBoard', pid]);
                  // 유효한 땅인지 검사하기
                } else if (condition === 4) {
                  const clickedLand = data.position;
                  console.log(
                    '외양간 지을 수 있는 곳 !',
                    validStableArr,
                    '선택된 땅은 : ',
                    clickedLand
                  );

                  if (validStableArr.includes(clickedLand)) {
                    // 외양간 짓기
                    console.log('유효한 번호입니다.');
                    await constructStable(pid, clickedLand, socket).then(
                      res => {
                        console.log('외양간 만들기 성공 !');
                        return res.data;
                      }
                    );

                    queryClient.invalidateQueries(['farmBoard', pid]);
                    queryClient.invalidateQueries(['resource']);

                    setPrompt({
                      message: '외양간이 만들어졌습니다.',
                      buttons: [],
                    });
                    clearPromptMsg(3000); // 3초

                    console.log('외양간 만들기 끝');

                    const isEnd = await isRoundEnd();
                    isEnd &&
                      roundEnd(socket, queryClient).then(async () => {
                        openRoundCard();
                        queryClient.invalidateQueries(['farmBoard']);
                        queryClient.invalidateQueries(['actionBoard']);
                        queryClient.invalidateQueries(['roundArray']);
                        const a = await getCurrentRound();
                        // console.log(a);
                        // console.log(a.round);
                        if (a[0].round === 8) {
                          console.log('modal!');
                          setIsEnd(true);
                        }
                      });
                    setIsFbActive(false);
                    setIsAbActive(true);
                    setCondition(0);
                  } else {
                    setPrompt({
                      message:
                        '그곳에는 외양간을 만들 수 없습니다. 다시 선택하세요.',
                      buttons: [],
                    });

                    setCondition(4);
                  }
                } else if (condition === 5) {
                  const clickedLand = data.position;
                  console.log('선택된 땅은 : ', clickedLand);

                  if (validRoomArr.includes(clickedLand)) {
                    console.log('유효한 번호입니다.');
                    await constructRoom(pid, clickedLand, socket);
                    queryClient.invalidateQueries(['farmBoard', pid]);
                    queryClient.invalidateQueries(['resource']);
                    console.log('방 만들기 끝');
                    setPrompt({
                      message: '방이 만들어졌습니다.',
                      buttons: [],
                    });
                    clearPromptMsg(3000); // 3초
                  } else {
                    setPrompt({
                      message:
                        '그곳에는 방을 만들 수 없습니다. 다시 선택하세요.',
                      buttons: [],
                    });
                    setCondition(5);
                  }
                } else if (condition === -1) {
                  // build fence 대안용
                  console.log(data.position);
                  await updatePenInFarmboard(pid, data.position, socket);
                  createPenposition(
                    pid,
                    data.position,
                    socket,
                    updateFenceposition,
                    pid % 2 ? fencePosition1 : fencePosition2,
                    pid % 2 ? setFencePosition1 : setFencePosition2
                  );
                  // .then(() => {
                  //   pid % 2
                  //     ? updateFenceposition(
                  //         data.position,
                  //         fencePosition1,
                  //         setFencePosition1
                  //       )
                  //     : updateFenceposition(
                  //         data.position,
                  //         fencePosition2,
                  //         setFencePosition2
                  //       );
                  // });
                  const isEnd = await isRoundEnd();
                  isEnd && endRound.mutate({ socket, queryClient });
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
              pid={pid}
            />
          ),
          4: <Empty isStable={true} pid={pid} />,
          5: (
            <Pen
              isStable={true}
              type={data && data.animal_type}
              num={data && data.animal_num}
              pid={pid}
            />
          ),
        }[data && data.position_type]
      }
    </div>
  );
}
