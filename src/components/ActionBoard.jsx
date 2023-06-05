import React from "react";
import Box from "./Box";
import RoundBox from "./RoundBox";
import useResource from "../hooks/useResource";

export default function ActionBoard({ openMajorSlot }) {
  const roundArray = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];
  const { updateResource, updateBaby } = useResource();

<<<<<<< HEAD
  const shuffle = arr => arr.sort(() => Math.random() - 0.5);

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

  const renderRound = (round, basis, roundNum) => {
    return round.map((info, idx) => {
      return roundArray[idx] ? (
        <Box
          ratio={basis}
          isSquare={true}
          title={info.title}
          key={idx}
          onClick={info.onClick}
        >
          {info.childTags}
        </Box>
      ) : (
        <RoundBox ratio={basis} round={roundNum} key={idx} />
      );
    });
  };
=======
  const round1 = [
    {
      title: "양시장🔻",
      childTags: (
        <>
          <p className=" text-xl font-bold mr-0.5">1</p>
          <img className="w-1/3" src="/img/sheep_icon.png" alt="sheep" />
        </>
      ),
      onClick: () => {
        console.log("hello1 !!!!!");
      },
    },
    {
      title: "울타리",
      childTags: (
        <div className="flex items-center justify-center">
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/wood_icon.png" alt="wood" />
          <p className="mx-1 text-2xl font-bold">→</p>
          <img className="w-1/4" src="/img/fence_icon.png" alt="fence" />
        </div>
      ),
      onClick: () => {
        console.log("hello2 !!!!!");
      },
    },
    {
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
        console.log("hello3 !!!!!");
      },
    },
    {
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
        console.log("hello4 !!!!!");
      },
    },
  ];

  const round2 = [
    {
      title: "서부 채석장🔻",
      childTags: (
        <>
          <p className=" text-xl font-bold mr-0.5">1</p>
          <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
        </>
      ),
      onClick: () => {
        console.log("hello5 !!!!!");
      },
    },
    {
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
        console.log("hello6 !!!!!");
      },
    },

    {
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
        console.log("hello7 !!!!!");
      },
    },
  ];

  const round3 = [
    {
      title: "채소 종자",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">+1</p>
          <img className="w-1/3" src="/img/vege_icon.png" alt="vegetable" />
        </>
      ),
      onClick: () => {
        console.log("hello8 !!!!!");
      },
    },
    {
      title: "돼지 시장🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/3" src="/img/boar_icon.png" alt="boar" />
        </>
      ),
      onClick: () => {
        console.log("hello9 !!!!!");
      },
    },
  ];

  const round4 = [
    {
      title: "소 시장🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/3" src="/img/cow_icon.png" alt="cow" />
        </>
      ),
      onClick: () => {
        console.log("hello10 !!!!!");
      },
    },
    {
      title: "동부 채석장🔻",
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
        </>
      ),
      onClick: () => {
        console.log("hello11 !!!!!");
      },
    },
  ];

  const round5 = [
    {
      title: "급한 가족 늘리기",
      childTags: (
        <img
          className="w-1/3"
          src="/img/addPerson2_icon.png"
          alt="addPerson2"
        />
      ),
      onClick: () => {
        console.log("hello12 !!!!!");
      },
    },
    {
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
        console.log("hello13 !!!!!");
      },
    },
  ];

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const shuffledRound1 = shuffle(round1);
  const shuffledRound2 = shuffle(round2);
  const shuffledRound3 = shuffle(round3);
  const shuffledRound4 = shuffle(round4);
  const shuffledRound5 = shuffle(round5);
>>>>>>> updateResource api actionboard에 적용할 준비

  return (
    <div className="flex flex-wrap ">
      <Box ratio="basis-1/5" isSquare={true} title={action[0].title}>
        {action[0].childTags}
      </Box>
      {renderRound(round1, 'basis-1/5', 1)}
      <div className="basis-1/5  flex flex-col">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[1].title}
        >
          {action[1].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[2].title}
        >
          {action[2].childTags}
        </Box>
      </div>
      <Box
        ratio="basis-1/5"
        isSquare={true}
<<<<<<< HEAD
        title={action[3].title}
        onClick={() => updateResource.mutate()}
=======
        title="숲🔻"
        onClick={() => updateResource.mutate({ pid: 1, rid: 1, num: 3 })}
>>>>>>> updateResource api actionboard에 적용할 준비
      >
        {action[3].childTags}
      </Box>
      {renderRound(round2, 'basis-1/5', 2)}
      <div className="basis-2/5   flex flex-wrap">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[4].title}
        >
          {action[4].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[5].title}
        >
          {action[5].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[6].title}
        >
          {action[6].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[7].title}
        >
          {action[7].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[8].title}
        >
          {action[8].childTags}
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[9].title}
        >
          {action[9].childTags}
        </Box>
      </div>
      <div className="basis-2/5 aspect-square	 flex flex-wrap">
        {renderRound(round3, 'basis-1/2', 3)}
        {renderRound(round4, 'basis-1/2', 4)}
      </div>
      <div className="basis-1/5"></div>
      {renderRound(round5, 'basis-1/5', 5)}
      {roundArray[13] ? (
        <Box ratio="basis-1/5" isSquare={true} title={action[23].title}>
          {action[23].childTags}
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="6" />
      )}
      <MajorCardBox ratio="basis-1/5" isSquare={true} onClick={openMajorSlot} />
    </div>
  );
}
