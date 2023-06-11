import React from "react";
import Box from "./Box";
import RoundBox from "./RoundBox";
import useResource from "../hooks/useResource";
import MajorCardBox from "./MajorCardBox";
import { useAuthContext } from "../context/AuthContext";
import {
  getActionBoard,
  getAvailableSlot,
  isRoundEnd,
  roundEnd,
  takeAction,
} from "../api/agricola";
import { useActionBoard } from "../hooks/useActionBoard";
import useFarmBoard from "../hooks/useFarmBoard";
import { useBackgroundContext } from "../context/BackgroundContext";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function ActionBoard() {
  const { pid, setIsFbActive, isAbActive, setIsAbActive, setIsCsActive } =
    useAuthContext();

  const queryClient = useQueryClient();

  const clearPromptMsg = () => {
    setTimeout(() => {
      setPrompt({ message: "", buttons: [] });
    }, 3000);
  };

  const {
    setPrompt,
    openMajorSlot,
    openP1HaveSlot,
    openP2HaveSlot,
    setCondition,
    validLandArr,
    setValidLandArr,
    roundArray,
    validRoomArr,
    setValidRoomArr,
    validStableArr,
    setValidStableArr,
    setIsMcActive,
    setIsScActive,
    setIsJcActive,
  } = useBackgroundContext();

  const {
    actionBoardQuery: { isLadoing, error, data },
  } = useActionBoard();
  // console.log("validLandArr", validLandArr);

  const { animalEvent } = useFarmBoard();
  const calcAccumul = (idx) => {
    return (
      data &&
      data[idx].acc_resource !== null &&
      data[idx].acc_resource > data[idx].add_resource
    );
  };

  const action = [
    {
      id: 8,
      title: "농장 확장",
      childTags: (
        <div className="flex flex-col items-center h-full">
          <div className="basis-3/6">
            <div className="flex items-center basis-1/3 justify-center">
              <p className=" font-bold mr-0.5">5</p>
              <img className="w-1/10" src="/img/wood_icon.png" alt="wood" />
              <p className=" font-bold ml-1 mr-0.5">2</p>
              <img className="w-1/10" src="/img/reed_icon.png" alt="reed" />
              <p className="mx-1 font-bold text-xs">→</p>
              <img
                className="w-1/5"
                src="/img/woodRoom_icon.png"
                alt="woodRoom"
              />
            </div>
            <div className="flex items-center basis-1/3 justify-center">
              <p className=" font-bold mr-0.5">5</p>
              <img className="w-1/10" src="/img/soil_icon.png" alt="soil" />
              <p className=" font-bold ml-1 mr-0.5">2</p>
              <img className="w-1/10" src="/img/reed_icon.png" alt="reed" />
              <p className="mx-1 font-bold text-xs">→</p>
              <img
                className="w-1/5"
                src="/img/soilRoom_icon.png"
                alt="soilRoom"
              />
            </div>
            <div className="flex items-center basis-1/3 justify-center">
              <p className=" font-bold mr-0.5">5</p>
              <img className="w-1/10" src="/img/stone_icon.png" alt="stone" />
              <p className=" font-bold ml-1 mr-0.5">2</p>
              <img className="w-1/10" src="/img/reed_icon.png" alt="reed" />
              <p className="mx-1 font-bold text-xs">→</p>
              <img
                className="w-1/5"
                src="/img/stoneRoom_icon.png"
                alt="ustoneRoom"
              />
            </div>
          </div>
          <p className="mx-1 font-bold my-1 basis-1/6">and/or</p>
          <div className="flex items-center justify-center basis-2/6">
            <p className=" font-bold ml-1 mr-0.5">2</p>
            <img className="w-1/6" src="/img/wood_icon.png" alt="wood" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img
              className="w-1/6"
              src="/img/stable_icon_red.png"
              alt="stable"
            />
          </div>
        </div>
      ),
      onClick: async () => {
        setIsFbActive(false);
        setIsAbActive(false);
        const result = await takeAction(pid, 8, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        const action_case = result.code;
        console.log("?", action_case);

        switch (action_case) {
          case 0: // 방, 외양간 가능
            console.log("방, 외양간 만들 수 있는 case ", action_case);
            setPrompt({
              message: "방을 만드시겠습니까?",
              buttons: [
                {
                  text: "Yes",
                  onClick: async () => {
                    console.log("방 만들래 ? Yes ! case : ", action_case);
                    const available_room_Arr = await getAvailableSlot(
                      pid,
                      "room"
                    );
                    console.log("가능한 room Arr", available_room_Arr);
                    setValidRoomArr(available_room_Arr);
                    setPrompt({
                      message: "방을 만들고 싶은 곳을 선택해주세요.",
                      buttons: [],
                    });

                    setCondition(3); // 방 -> 외양간 물어보기
                    setIsAbActive(false);
                    setIsFbActive(true);
                  },
                },
                {
                  text: "No",
                  onClick: async () => {
                    // 외양간 만들기 로직
                    console.log(
                      "방 안만들고 외양간 만들래 ! case : ",
                      action_case
                    );
                    const available_stable_Arr = await getAvailableSlot(
                      pid,
                      "cowshed"
                    );
                    console.log(
                      "getavailabeldSlot 외양간 ver ! pid :",
                      pid,
                      available_stable_Arr
                    );
                    setValidStableArr(available_stable_Arr);

                    setPrompt({
                      message: "외양간을 만들고 싶은 곳을 선택해주세요.",
                      buttons: [],
                    });
                    setCondition(4); //외양간

                    setIsAbActive(false);
                    setIsFbActive(true);
                  },
                },
              ],
            });
            break;
          case 1: // 외양간 가능
            console.log("외양간 만들 수 있는 case ", action_case);
            setPrompt({
              message: "외양간을 만드시겠습니까?",
              buttons: [
                // yes : 외양간 로직 후 끝
                {
                  text: "Yes",
                  onClick: async () => {
                    console.log("외양간 만들래 ! case : ", action_case);
                    const available_stable_Arr = await getAvailableSlot(
                      pid,
                      "cowshed"
                    );
                    console.log(
                      "getavailabeldSlot 외양간 ! pid :",
                      pid,
                      available_stable_Arr
                    );
                    setValidStableArr(available_stable_Arr);

                    setPrompt({
                      message: "외양간을 만들고 싶은 곳을 선택해주세요.",
                      buttons: [],
                    });
                    setCondition(4); //외양간

                    setIsAbActive(false);
                    setIsFbActive(true);
                  },
                },
                // no : 그냥 turn 끝
                {
                  text: "No",
                  onClick: () => {
                    setPrompt({
                      message: "아무 행동을 하지 못하고 턴이 끝났습니다.",
                      buttons: [],
                    });
                    setCondition(0);
                    clearPromptMsg();
                    setIsAbActive(true);
                    setIsFbActive(false);
                  },
                },
              ],
            });
            // yes : 외양간 로직 후 끝

            // no : 그냥 turn 끝
            break;
          case 2: // 방만 가능
            console.log("방 만들 수 있는 case ", action_case);
            setPrompt({
              message: "방을 만드시겠습니까?",
              buttons: [
                // yes : 방 로직 후 끝
                {
                  text: "Yes",
                  onClick: async () => {
                    console.log("방 ! case : ", action_case);
                    const available_room_Arr = await getAvailableSlot(
                      pid,
                      "room"
                    );
                    console.log("가능한 room Arr", available_room_Arr);
                    setValidRoomArr(available_room_Arr);
                    setPrompt({
                      message: "방을 만들고 싶은 곳을 선택해주세요.",
                      buttons: [],
                    });

                    setCondition(5); //방만 만들기
                    setIsAbActive(false);
                    setIsFbActive(true);
                  },
                },
                // no : 그냥 turn 끝
                {
                  text: "No",
                  onClick: () => {
                    setPrompt({
                      message: "아무 행동을 하지 못하고 턴이 끝났습니다.",
                      buttons: [],
                    });
                    setCondition(0);
                    clearPromptMsg();
                    setIsAbActive(true);
                    setIsFbActive(false);
                  },
                },
              ],
            });
            break;
          case -1:
            setPrompt({
              message: "아무 행동도 할 수 없습니다.",
              buttons: [],
            });
            setCondition(0);
            clearPromptMsg();
            break;
          default:
            console.log("default");
            break;
        }
        // 초기화
        setCondition(0);
        setIsAbActive(true);
        setIsFbActive(false);
      },
      isAccumul: calcAccumul(7),
      isOcuupied: data && data[7].is_occupied,
    },
    {
      id: 9,
      title: "회합 장소",
      childTags: (
        <>
          <img className="w-1/6" src="/img/first_icon.png" alt="first" />
          <p className="mx-1 font-bold">and/or</p>
          <>
            <p className="font-bold mr-0.5">1</p>
            <img
              className="w-1/4"
              src="/img/subEqCard_icon.png"
              alt="subEqCard"
            />
          </>
        </>
      ),
      onClick: () => {
        setPrompt({
          message: "어떤 행동을 하고 싶으신가요?",
          buttons: [
            {
              text: "선플레이어",
              onClick: () => {
                // 선플레이어
                takeAction(pid, 9, 1);
                queryClient.invalidateQueries(["firstPlayer", pid]);

                setPrompt({
                  message: "선플레이어가 바뀌었습니다.",
                  buttons: [],
                });

                // 2초 후 보조설비 물어보기
                setTimeout(() => {
                  setPrompt({
                    message: "보조설비를 만드시겠습니까?",
                    buttons: [
                      {
                        text: "Yes",
                        onClick: () => {
                          setCondition(9);
                          setIsCsActive(true);
                          setIsScActive(true);
                          setIsJcActive(false);
                          setIsAbActive(false);
                          pid === 1 ? openP1HaveSlot() : openP2HaveSlot();
                        },
                      },
                      {
                        text: "No",
                        onClick: () => {
                          setPrompt({
                            message: "행동이 종료되었습니다.",
                            buttons: [],
                          });

                          setTimeout(() => {
                            setPrompt({ message: "", buttons: [] });
                          }, 2000);
                        },
                      },
                    ],
                  });
                }, 2000);
              },
            },
            {
              test: "보조설비",
              onClick: () => {
                // 보조설비
                setCondition(9);
                setIsCsActive(true);
                setIsScActive(true);
                setIsJcActive(false);
                setIsAbActive(false);
                pid === 1 ? openP1HaveSlot() : openP2HaveSlot();
              },
            },
          ],
        });
      },
      isAccumul: calcAccumul(8),
      isOcuupied: data && data[8].is_occupied,
    },
    {
      id: 10,
      title: "곡식 종자",
      childTags: (
        <>
          <p className="font-bold mr-0.5">+1</p>
          <img className="w-1/4" src="/img/grain_icon.png" alt="grain" />
        </>
      ),
      onClick: async () => {
        await takeAction(pid, 10, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["resource", pid]);
        const isEnd = await isRoundEnd();
        isEnd && roundEnd();
      },
      isAccumul: calcAccumul(9),
      isOcuupied: data && data[9].is_occupied,
    },
    {
      id: 11,
      title: "숲🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[10].acc_resource}
          </p>
          <img className="w-1/3" src="/img/wood_icon.png" alt="wood" />
        </>
      ),
      onClick: async () => {
        await takeAction(pid, 11, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["farmBoard", pid]);
        queryClient.invalidateQueries(["resource", pid]);
        const isEnd = await isRoundEnd();
        isEnd && roundEnd();
      },
      isAccumul: calcAccumul(10),
      isOcuupied: data && data[10].is_occupied,
    },
    {
      id: 12,
      title: "농지",
      childTags: (
        <img className="w-1/3" src="/img/farmland_icon.png" alt="farmland" />
      ),

      onClick: async () => {
        // useValidLand.mutate({ pid });
        setIsFbActive(true);
        setIsAbActive(false);
        setPrompt({
          message: "밭을 만들 땅을 클릭하세요.",
          buttons: [],
        });
        setCondition(2);
        const result = await takeAction(pid, 12, 1);
        queryClient.invalidateQueries(["actionBoard"]);

        console.log("resss", result);
        console.log("resss2", result.lands);
        // 농지 condition으로 변경
        setValidLandArr(result.lands);
        console.log("validLandArr", validLandArr);
      },
      isAccumul: calcAccumul(11),
      isOcuupied: data && data[11].is_occupied,
    },
    {
      id: 13,
      title: "흙 채굴장🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[12].acc_resource}
          </p>
          <img className="w-1/4" src="/img/soil_icon.png" alt="soil" />
        </>
      ),
      onClick: async () => {
        await takeAction(pid, 13, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["resource", pid]);
        const isEnd = await isRoundEnd();
        isEnd && roundEnd();
      },
      isAccumul: calcAccumul(12),
      isOcuupied: data && data[12].is_occupied,
    },
    {
      id: 5,
      title: "교습",
      childTags: (
        <div className="flex flex-col">
          <p className="font-bold">직업당</p>
          <div className="flex items-center justify-center">
            <>
              <p className="font-bold mr-0.5">1</p>
              <img className="w-1/4" src="/img/food_icon.png" alt="food" />
            </>
            <p className="mx-1 text-lg">→</p>
            <>
              <p className="font-bold mr-0.5">1</p>
              <img
                className="w-1/4"
                src="/img/jobCard_icon.png"
                alt="jobCard"
              />
            </>
          </div>
        </div>
      ),
      onClick: async () => {
        setPrompt({
          message: "활성화 시키고 싶은 직업카드를 선택해주세요",
          buttons: [],
        });
        setCondition(5);
        pid === 1 ? openP1HaveSlot() : openP2HaveSlot();
        setIsCsActive(true);
        setIsScActive(false);
        setIsJcActive(true);
        setIsAbActive(false);
        // await takeAction(pid, 5, 1)
        //   .then(() => {
        //     // takeAction 성공
        //     queryClient.invalidateQueries(["resource", pid]);
        //     queryClient.invalidateQueries(["actionBoard"]);
        //   })
        //   .catch((error) => {
        //     // let errMsg = ;
        //     console.log(error.response.data.error);
        //     if (
        //       (error.response.data.error =
        //         "That player seems not to have enough food")
        //     ) {
        //       setPrompt({
        //         message: "교습 행동을 위한 음식이 부족합니다.",
        //         buttons: [],
        //       });
        //       // clear 필요
        //     } else {
        //       console.log("동일안함");
        //     }
        //   });
      },
      isAccumul: calcAccumul(4),
      isOcuupied: data && data[4].is_occupied,
    },
    {
      id: 14,
      title: "갈대밭🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[13].acc_resource}
          </p>
          <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
        </>
      ),
      // onClick: async () => {
      //   await takeAction(pid, 14, 1);
      //   queryClient.invalidateQueries(["actionBoard"]);
      //   queryClient.invalidateQueries(["resource", pid]);
      //   const isEnd = await isRoundEnd();
      //   isEnd && roundEnd();
      // },
      // 임시 initial api
      onClick: () => {
        axios.get("http://3.36.7.233:3000/account/initial/").then((res) => {
          console.log("initial api호출", res.data);
        });
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["farmBoard"]);
        queryClient.invalidateQueries(["resource"]);
      },
      isAccumul: calcAccumul(13),
      isOcuupied: data && data[13].is_occupied,
    },
    {
      id: 15,
      title: "납품팔이",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">+2</p>
          <img className="w-1/4" src="/img/food_icon.png" alt="food" />
        </>
      ),
      // onClick: async () => {
      //   await takeAction(pid, 15, 1);
      //   queryClient.invalidateQueries(["actionBoard"]);
      //   queryClient.invalidateQueries(["resource", pid]);
      //   const isEnd = await isRoundEnd();
      //   isEnd && roundEnd();
      // },
      onClick: () => {
        axios
          .get("http://3.36.7.233:3000/gamestatus/round_end/")
          .then((res) => {
            console.log("round_end api호출", res.data);
          });
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["farmBoard"]);
        queryClient.invalidateQueries(["resource"]);
      },

      isAccumul: calcAccumul(9),
      isOcuupied: data && data[9].is_occupied,
    },
    {
      id: 16,
      title: "낚시🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[15].acc_resource}
          </p>
          <img className="w-1/4" src="/img/food_icon.png" alt="food" />
        </>
      ),
      // onClick: async () => {
      //   await takeAction(pid, 16, 1);
      //   queryClient.invalidateQueries(["actionBoard"]);
      //   queryClient.invalidateQueries(["resource", pid]);
      //   const isEnd = await isRoundEnd();
      //   isEnd && roundEnd();
      // },

      //임시로 만든 플레이어 초기화 버튼
      onClick: () => {
        axios
          .get("http://3.36.7.233:3000/player/choose_first_player")
          .then((res) => {
            console.log("첫번째 플레이어 뽑습니다", res.data);
          });
      },

      isAccumul: calcAccumul(15),
      isOcuupied: data && data[15].is_occupied,
    },
    {
      id: 18,
      title: "양시장🔻",
      childTags: (
        <>
          <p className=" text-xl font-bold mr-0.5">
            {data && data[17].acc_resource}
          </p>
          <img className="w-1/3" src="/img/sheep_icon.png" alt="sheep" />
        </>
      ),
      onClick: async () => {
        const a = await takeAction(pid, 18, 1);
        // animalEvent({ name: '양', num: data[17].acc_resource });
        queryClient.invalidateQueries(["resource"]);
        queryClient.invalidateQueries(["actionBoard"]);
        if (a !== 0) {
          setPrompt({
            message: "동물을 키울 울타리를 선택하세요!",
            buttons: [],
          });
          setIsAbActive(false);
          setIsFbActive(true);
        }
      },
      isAccumul: calcAccumul(17),
      isOcuupied: data && data[17].is_occupied,
    },
    {
      id: 17,
      title: "울타리",
      childTags: (
        <div className="flex items-center justify-center">
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/wood_icon.png" alt="wood" />
          <p className="mx-1 text-2xl font-bold">→</p>
          <img className="w-1/4" src="/img/fence_icon.png" alt="fence" />
        </div>
      ),
      onClick: async () => {
        // await takeAction(pid, 17, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        setPrompt({
          message: "울타리를 치고 싶은 땅을  선택하세요.",
          buttons: [],
        });
        setIsFbActive(true);
        setIsAbActive(false);
        setCondition(-1);
      },
      isAccumul: calcAccumul(16),
      isOcuupied: data && data[16].is_occupied,
    },
    {
      id: 20,
      title: "주요설비",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img
            className="w-1/4"
            src="/img/mainEqCard_icon.png"
            alt="mainEqCard"
          />
          <p className="mx-1 text-lg font-bold">or</p>
          <img
            className="w-1/4"
            src="/img/subEqCard_icon.png"
            alt="subEqCard"
          />
        </>
      ),
      onClick: () => {
        setPrompt({
          message: "어떤 카드를 활성화시키고 싶으신가요?",
          buttons: [
            {
              text: "주요설비",
              onClick: () => {
                openMajorSlot();
              },
            },
            {
              text: "보조설비",
              onClick: () => {
                pid === 1 ? openP1HaveSlot() : openP2HaveSlot();
              },
            },
          ],
        });
        setCondition(20);
        setIsCsActive(true);
        setIsScActive(true);
        setIsJcActive(false);
        setIsMcActive(true);

        setIsAbActive(false);
      },
      isAccumul: calcAccumul(19),
      isOcuupied: data && data[19].is_occupied,
    },
    {
      id: 19,
      title: "곡식활용",
      childTags: (
        <>
          <img
            className="w-1/4"
            src="/img/grainVege_icon.png"
            alt="grainVege"
          />
          <p className="mx-1 font-bold">and/or</p>
          <img className="w-1/4" src="/img/bread_icon.png" alt="bread" />
        </>
      ),
      onClick: () => {
        takeAction(pid, 19, 1);
      },
      isAccumul: calcAccumul(18),
      isOcuupied: data && data[18].is_occupied,
    },
    {
      id: 22,
      title: "서부 채석장🔻",
      childTags: (
        <>
          <p className=" text-xl font-bold mr-0.5">
            {data && data[21].acc_resource}
          </p>
          <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
        </>
      ),
      onClick: async () => {
        await takeAction(pid, 22, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["resource", pid]);
        const isEnd = await isRoundEnd();
        isEnd && roundEnd();
      },
      isAccumul: calcAccumul(21),
      isOcuupied: data && data[21].is_occupied,
    },
    {
      id: 23,
      title: "기본 가족 늘리기",
      childTags: (
        <>
          <img
            className="w-1/4"
            src="/img/addPerson_icon.png"
            alt="addPerson"
          />
          <p className="mx-1 font-bold text-xs">한 후에</p>
          <p className="mr-0.5 text-lg font-bold">1</p>
          <img
            className="w-1/4"
            src="/img/subEqCard_icon.png"
            alt="subEqCard"
          />
        </>
      ),
      onClick: () => {
        setPrompt({
          message: "활성화 시키고 싶은 보조설비를 선택해주세요",
          buttons: [
            // {
            //   text: '취소',
            //   onClick: async () => {
            //     // cid가 0일 경우 500 에러남
            //     await takeAction(pid, 23, 0);
            //     queryClient.invalidateQueries(['actionBoard']);
            //     queryClient.invalidateQueries(['farmBoard', pid]);
            //     queryClient.invalidateQueries(['resource', pid]);
            //     setPrompt({ message: '', buttons: [] });
            //     setIsAbActive(true);
            //     setIsCsActive(false);
            //   },
            // },
          ],
        });
        setCondition(23);
        pid === 1 ? openP1HaveSlot() : openP2HaveSlot();
        setIsScActive(true);
        setIsAbActive(false);
        setIsCsActive(true);
      },
      isAccumul: calcAccumul(22),
      isOcuupied: data && data[22].is_occupied,
    },

    {
      id: 21,
      title: "집개조",
      childTags: (
        <div className="flex flex-col items-center h-full">
          <div className="flex items-center justify-center basis-2/5">
            <p className=" font-bold mr-0.5">1</p>
            <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
            <p className="mx-1 font-bold text-lg">+</p>
            <img
              className="w-1/2"
              src="/img/upgradeRoom_icon.png"
              alt="upgradeRoom"
            />
          </div>
          <p className="font-bold text-xs basis-1/5 flex items-center">
            한 후에
          </p>
          <div className="flex items-center justify-center basis-2/5">
            <p className=" font-bold mr-0.5">1</p>
            <img
              className="w-1/4"
              src="/img/mainEqCard_icon.png"
              alt="mainEqCard"
            />
            <p className="mx-1  font-bold">or</p>
            <img
              className="w-1/4"
              src="/img/subEqCard_icon.png"
              alt="subEqCard"
            />
          </div>
        </div>
      ),
      onClick: () => {
        // 1. 프롬프트 띄우기
        setPrompt({
          message: "어떤 카드를 활성화시키고 싶으신가요?",
          buttons: [
            {
              text: "주요설비",
              onClick: () => {
                openMajorSlot();
              },
            },
            {
              text: "보조설비",
              onClick: () => {
                pid === 1 ? openP1HaveSlot() : openP2HaveSlot();
              },
            },
            // {
            //   text: '취소',
            //   onClick: async () => {
            //     // 0일 경우 500 에러남
            //     await takeAction(pid, 21, 0);
            //     queryClient.invalidateQueries(['actionBoard']);
            //     queryClient.invalidateQueries(['farmBoard', pid]);
            //     queryClient.invalidateQueries(['resource', pid]);
            //     setPrompt({ message: '', buttons: [] });
            //     setIsAbActive(true);
            //     setIsCsActive(false);
            //   },
            // },
          ],
        });
        setCondition(21);
        setIsScActive(true);
        setIsMcActive(true);
        setIsAbActive(false);
        setIsCsActive(true);
      },
      isAccumul: calcAccumul(20),
      isOcuupied: data && data[20].is_occupied,
    },
    {
      id: 25,
      title: "채소 종자",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">+1</p>
          <img className="w-1/3" src="/img/vege_icon.png" alt="vegetable" />
        </>
      ),
      onClick: async () => {
        await takeAction(pid, 25, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["resource", pid]);
        const isEnd = await isRoundEnd();
        isEnd && roundEnd();
      },
      isAccumul: calcAccumul(24),
      isOcuupied: data && data[24].is_occupied,
    },
    {
      id: 24,
      title: "돼지 시장🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[23].acc_resource}
          </p>
          <img className="w-1/3" src="/img/boar_icon.png" alt="boar" />
        </>
      ),
      onClick: async () => {
        await takeAction(pid, 24, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["resource", pid]);
        const isEnd = await isRoundEnd();
        isEnd && roundEnd();
      },
      isAccumul: calcAccumul(23),
      isOcuupied: data && data[23].is_occupied,
    },
    {
      id: 26,
      title: "소 시장🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[25].acc_resource}
          </p>
          <img className="w-1/3" src="/img/cow_icon.png" alt="cow" />
        </>
      ),
      onClick: () => {
        takeAction(pid, 26, 1);
      },
      isAccumul: calcAccumul(25),
      isOcuupied: data && data[25].is_occupied,
    },
    {
      id: 27,
      title: "동부 채석장🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[26].acc_resource}
          </p>
          <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
        </>
      ),
      onClick: async () => {
        await takeAction(pid, 27, 1);
        queryClient.invalidateQueries(["actionBoard"]);
        queryClient.invalidateQueries(["resource", pid]);
        const isEnd = await isRoundEnd();
        isEnd && roundEnd();
      },
      isAccumul: calcAccumul(26),
      isOcuupied: data && data[26].is_occupied,
    },
    {
      id: 29,
      title: "급한 가족 늘리기",
      childTags: (
        <img
          className="w-1/3"
          src="/img/addPerson2_icon.png"
          alt="addPerson2"
        />
      ),
      onClick: () => {
        takeAction(pid, 29, 1);
      },
      isAccumul: calcAccumul(28),
      isOcuupied: data && data[28].is_occupied,
    },
    {
      id: 28,
      title: "밭 농사",
      childTags: (
        <div className="flex flex-col items-center h-full py-1">
          <div className="w-1/3 basis-2/5 flex items-center">
            <img src="/img/farmland_icon.png" alt="farmland" />
          </div>
          <p className="font-bold basis-1/5">and/or</p>
          <div className="w-1/3 basis-2/5 flex items-center">
            <img src="/img/grainVege_icon.png" alt="grainVege" />
          </div>
        </div>
      ),
      onClick: () => {
        takeAction(pid, 28, 1);
      },
      isAccumul: calcAccumul(27),
      isOcuupied: data && data[27].is_occupied,
    },
    {
      id: 30,
      title: "농장 개조",
      childTags: (
        <div className="flex flex-col items-center h-full">
          <div className="flex items-center justify-center basis-2/5">
            <p className="font-bold mr-0.5">1</p>
            <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
            <p className="mx-1 font-bold text-lg">+</p>
            <img
              className="w-1/2"
              src="/img/upgradeRoom_icon.png"
              alt="upgradeRoom"
            />
          </div>
          <p className="mx-1 font-bold text-xs basis-1/5 flex items-center">
            한 후에
          </p>
          <div className="flex items-center justify-center basis-2/5">
            <p className="font-bold mr-0.5">1</p>
            <img className="w-1/4" src="/img/wood_icon.png" alt="wood" />
            <p className="mx-1 text-lg">→</p>
            <img className="w-1/4" src="/img/fence_icon.png" alt="fence" />
          </div>
        </div>
      ),
      onClick: () => {
        takeAction(pid, 30, 1);
      },
      isAccumul: calcAccumul(29),
      isOcuupied: data && data[29].is_occupied,
    },
  ];

  const { updateResource, updateBaby } = useResource();

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  // const shuffledRound1 = shuffle(round1);
  // const shuffledRound2 = shuffle(round2);
  // const shuffledRound3 = shuffle(round3);
  // const shuffledRound4 = shuffle(round4);
  // const shuffledRound5 = shuffle(round5);

  const round1 = action.slice(10, 14);
  const round2 = action.slice(14, 17);
  const round3 = action.slice(17, 19);
  const round4 = action.slice(19, 21);
  const round5 = action.slice(21, 23);

  const renderRound = (round, basis, roundNum, inum) => {
    return round.map((info, idx) => {
      return roundArray[idx + inum] ? (
        <Box
          ratio={basis}
          isSquare={true}
          title={info.title}
          key={idx}
          onClick={info.onClick}
          isAccumul={info.isAccumul}
          isOcuupied={info.isOcuupied}
        >
          {info.childTags}
        </Box>
      ) : (
        <RoundBox ratio={basis} round={roundNum} key={idx} />
      );
    });
  };

  // const shuffle = arr => arr.sort(() => Math.random() - 0.5);

  // const shuffledRound1 = shuffle(round1);
  // const shuffledRound2 = shuffle(round2);
  // const shuffledRound3 = shuffle(round3);
  // const shuffledRound4 = shuffle(round4);
  // const shuffledRound5 = shuffle(round5);

  return (
    <div
      className={`flex flex-wrap pr-28 ${!isAbActive && "pointer-events-none"}`}
    >
      <Box
        ratio="basis-1/5"
        isSquare={true}
        title={action[0].title}
        onClick={action[0].onClick}
        isAccumul={action[0].isAccumul}
        isOcuupied={action[0].isOcuupied}
      >
        {action[0].childTags}
      </Box>
      {renderRound(round1, "basis-1/5", 1, 0)}
      <div className="basis-1/5  flex flex-col">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[1].title}
          onClick={action[1].onClick}
          isAccumul={action[1].isAccumul}
          isOcuupied={action[1].isOcuupied}
        >
          {action[1].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[2].title}
          onClick={action[2].onClick}
          isAccumul={action[2].isAccumul}
          isOcuupied={action[2].isOcuupied}
        >
          {action[2].childTags}
        </Box>
      </div>
      <Box
        ratio="basis-1/5"
        isSquare={true}
        title={action[3].title}
        onClick={action[3].onClick}
        isAccumul={action[3].isAccumul}
        isOcuupied={action[3].isOcuupied}
      >
        {action[3].childTags}
      </Box>
      {renderRound(round2, "basis-1/5", 2, 4)}
      <div className="basis-2/5   flex flex-wrap">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[4].title}
          onClick={action[4].onClick}
          isAccumul={action[4].isAccumul}
          isOcuupied={action[4].isOcuupied}
        >
          {action[4].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[5].title}
          onClick={action[5].onClick}
          isAccumul={action[5].isAccumul}
          isOcuupied={action[5].isOcuupied}
        >
          {action[5].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[6].title}
          onClick={action[6].onClick}
          isAccumul={action[6].isAccumul}
          isOcuupied={action[6].isOcuupied}
        >
          {action[6].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[7].title}
          onClick={action[7].onClick}
          isAccumul={action[7].isAccumul}
          isOcuupied={action[7].isOcuupied}
        >
          {action[7].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[8].title}
          onClick={action[8].onClick}
          isAccumul={action[8].isAccumul}
          isOcuupied={action[8].isOcuupied}
        >
          {action[8].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[9].title}
          onClick={action[9].onClick}
          isAccumul={action[9].isAccumul}
          isOcuupied={action[9].isOcuupied}
        >
          {action[9].childTags}
        </Box>
      </div>
      <div className="basis-2/5 aspect-square    flex flex-wrap">
        {renderRound(round3, "basis-1/2", 3, 7)}
        {renderRound(round4, "basis-1/2", 4, 9)}
      </div>
      <div className="basis-1/5"></div>
      {renderRound(round5, "basis-1/5", 5, 11)}
      {roundArray[13] ? (
        <Box
          ratio="basis-1/5"
          isSquare={true}
          title={action[23].title}
          onClick={action[23].onClick}
          isAccumul={action[23].isAccumul}
          isOcuupied={action[23].isOcuupied}
        >
          {action[23].childTags}
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="6" />
      )}
      <MajorCardBox ratio="basis-1/5" isSquare={true} />
    </div>
  );
}
