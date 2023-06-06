import React from 'react';
import Box from './Box';
import RoundBox from './RoundBox';
import useResource from '../hooks/useResource';
import MajorCardBox from './MajorCardBox';
import { useAuthContext } from '../context/AuthContext';
import { getActionBoard, takeAction } from '../api/agricola';
import useActionBoard from '../hooks/useActionBoard';

export default function ActionBoard({ openMajorSlot }) {
  const { pid } = useAuthContext();

  const {
    actionBoardQuery: { isLadoing, error, data },
  } = useActionBoard();

  const calcAccumul = idx => {
    return (
      data[idx].acc_resource !== null &&
      data[idx].acc_resource > data[idx].add_resource
    );
  };

  const action = [
    {
      id: 8,
      title: '농장 확장',
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
      onClick: () => {
        takeAction({ pid, aid: 8 });
      },
      isAccumul: calcAccumul(7),
    },
    {
      id: 9,
      title: '회합 장소',
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
        takeAction({ pid, aid: 9 });
      },
      isAccumul: calcAccumul(8),
    },
    {
      id: 10,
      title: '곡식 종자',
      childTags: (
        <>
          <p className="font-bold mr-0.5">+1</p>
          <img className="w-1/4" src="/img/grain_icon.png" alt="grain" />
        </>
      ),
      onClick: () => takeAction({ pid, aid: 10 }),
      isAccumul: calcAccumul(9),
    },
    {
      id: 11,
      title: '숲🔻',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[10].acc_resource}
          </p>
          <img className="w-1/3" src="/img/wood_icon.png" alt="wood" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 11 });
      },
      isAccumul: calcAccumul(10),
    },
    {
      id: 12,
      title: '농지',
      childTags: (
        <img className="w-1/3" src="/img/farmland_icon.png" alt="farmland" />
      ),
      onClick: () => {
        takeAction({ pid, aid: 12 });
      },
      isAccumul: calcAccumul(11),
    },
    {
      id: 13,
      title: '흙 채굴장🔻',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[12].acc_resource}
          </p>
          <img className="w-1/4" src="/img/soil_icon.png" alt="soil" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 13 });
      },
      isAccumul: calcAccumul(12),
    },
    {
      id: 5,
      title: '교습',
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
      onClick: () => {
        takeAction({ pid, aid: 5 });
      },
      isAccumul: calcAccumul(4),
    },
    {
      id: 14,
      title: '갈대밭🔻',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[13].acc_resource}
          </p>
          <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 14 });
      },
      isAccumul: calcAccumul(13),
    },
    {
      id: 15,
      title: '납품팔이',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">+2</p>
          <img className="w-1/4" src="/img/food_icon.png" alt="food" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 15 });
      },
      isAccumul: calcAccumul(9),
    },
    {
      id: 16,
      title: '낚시🔻',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[15].acc_resource}
          </p>
          <img className="w-1/4" src="/img/food_icon.png" alt="food" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 16 });
      },
      isAccumul: calcAccumul(15),
    },
    {
      id: 18,
      title: '양시장🔻',
      childTags: (
        <>
          <p className=" text-xl font-bold mr-0.5">
            {data && data[17].acc_resource}
          </p>
          <img className="w-1/3" src="/img/sheep_icon.png" alt="sheep" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 18 });
      },
      isAccumul: calcAccumul(17),
    },
    {
      id: 17,
      title: '울타리',
      childTags: (
        <div className="flex items-center justify-center">
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/wood_icon.png" alt="wood" />
          <p className="mx-1 text-2xl font-bold">→</p>
          <img className="w-1/4" src="/img/fence_icon.png" alt="fence" />
        </div>
      ),
      onClick: () => {
        takeAction({ pid, aid: 17 });
      },
      isAccumul: calcAccumul(16),
    },
    {
      id: 20,
      title: '주요설비',
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
        takeAction({ pid, aid: 20 });
      },
      isAccumul: calcAccumul(19),
    },
    {
      id: 19,
      title: '곡식활용',
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
        takeAction({ pid, aid: 19 });
      },
      isAccumul: calcAccumul(18),
    },
    {
      id: 22,
      title: '서부 채석장🔻',
      childTags: (
        <>
          <p className=" text-xl font-bold mr-0.5">
            {data && data[21].acc_resource}
          </p>
          <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 22 });
      },
      isAccumul: calcAccumul(21),
    },
    {
      id: 23,
      title: '기본 가족 늘리기',
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
        takeAction({ pid, aid: 23 });
      },
      isAccumul: calcAccumul(22),
    },

    {
      id: 21,
      title: '집개조',
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
        takeAction({ pid, aid: 21 });
      },
      isAccumul: calcAccumul(20),
    },
    {
      id: 25,
      title: '채소 종자',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">+1</p>
          <img className="w-1/3" src="/img/vege_icon.png" alt="vegetable" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 25 });
      },
      isAccumul: calcAccumul(24),
    },
    {
      id: 24,
      title: '돼지 시장🔻',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[23].acc_resource}
          </p>
          <img className="w-1/3" src="/img/boar_icon.png" alt="boar" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 24 });
      },
      isAccumul: calcAccumul(23),
    },
    {
      id: 26,
      title: '소 시장🔻',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[25].acc_resource}
          </p>
          <img className="w-1/3" src="/img/cow_icon.png" alt="cow" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 26 });
      },
      isAccumul: calcAccumul(25),
    },
    {
      id: 27,
      title: '동부 채석장🔻',
      childTags: (
        <>
          <p className=" text-lg font-bold mr-0.5">
            {data && data[26].acc_resource}
          </p>
          <img className="w-1/3" src="/img/stone_icon.png" alt="stone" />
        </>
      ),
      onClick: () => {
        takeAction({ pid, aid: 27 });
      },
      isAccumul: calcAccumul(26),
    },
    {
      id: 29,
      title: '급한 가족 늘리기',
      childTags: (
        <img
          className="w-1/3"
          src="/img/addPerson2_icon.png"
          alt="addPerson2"
        />
      ),
      onClick: () => {
        takeAction({ pid, aid: 29 });
      },
      isAccumul: calcAccumul(28),
    },
    {
      id: 28,
      title: '밭 농사',
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
        takeAction({ pid, aid: 28 });
      },
      isAccumul: calcAccumul(27),
    },
    {
      id: 30,
      title: '농장 개조',
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
        takeAction({ pid, aid: 30 });
      },
      isAccumul: calcAccumul(29),
    },
  ];

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
          isAccumul={info.isAccumul}
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
    <div className="flex flex-wrap ">
      <Box
        ratio="basis-1/5"
        isSquare={true}
        title={action[0].title}
        onClick={action[0].onClick}
        isAccumul={action[0].isAccumul}
      >
        {action[0].childTags}
      </Box>
      {renderRound(round1, 'basis-1/5', 1)}
      <div className="basis-1/5  flex flex-col">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title={action[1].title}
          onClick={action[1].onClick}
          isAccumul={action[1].isAccumul}
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
          onClick={action[4].onClick}
          isAccumul={action[4].isAccumul}
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
        >
          {action[9].childTags}
        </Box>
      </div>
      <div className="basis-2/5 aspect-square    flex flex-wrap">
        {renderRound(round3, 'basis-1/2', 3)}
        {renderRound(round4, 'basis-1/2', 4)}
      </div>
      <div className="basis-1/5"></div>
      {renderRound(round5, 'basis-1/5', 5)}
      {roundArray[13] ? (
        <Box
          ratio="basis-1/5"
          isSquare={true}
          title={action[23].title}
          onClick={action[23].onClick}
          isAccumul={action[23].isAccumul}
        >
          {action[23].childTags}
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="6" />
      )}
      <MajorCardBox ratio="basis-1/5" isSquare={true} onClick={openMajorSlot} />
    </div>
  );
}
