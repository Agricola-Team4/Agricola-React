import React from 'react';
import Box from './Box';
import RoundBox from './RoundBox';
import HTMLReactParser from 'html-react-parser';
import useResource from '../hooks/useResource';

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
  const { updateResource } = useResource();

  const round1 = [
    {
      title: '양시장🔻',
      childTags: `<p className=" text-xl font-bold mr-0.5">1</p>
<img className="w-1/3" src='/img/sheep_icon.png' alt="sheep" />`,
    },
    {
      title: '울타리',
      childTags: `<div className="flex items-center justify-center">
      <p className=" text-lg font-bold mr-0.5">1</p>
      <img className="w-1/4" src='/img/wood_icon.png' alt="wood" />
      <p className="mx-1 text-2xl font-bold">→</p>
      <img className="w-1/4" src='/img/fence_icon.png' alt="fence" />
    </div>`,
    },
    {
      title: '주요설비',
      childTags: `<p className=" text-lg font-bold mr-0.5">1</p>
      <img className="w-1/4" src='/img/mainEqCard_icon.png' alt="mainEqCard" />
      <p className="mx-1 text-lg font-bold">or</p>
      <img className="w-1/4" src='/img/subEqCard_icon.png' alt="subEqCard" />`,
    },
    {
      title: '곡식활용',
      childTags: `<img className="w-1/4" src='/img/grainVege_icon.png' alt="grainVege" />
      <p className="mx-1 font-bold">and/or</p>
      <img className="w-1/4" src='/img/bread_icon.png' alt="bread" />`,
    },
  ];

  const round2 = [
    {
      title: '서부 채석장🔻',
      childTags: `<p className=" text-xl font-bold mr-0.5">1</p>
      <img className="w-1/3" src='/img/stone_icon.png' alt="stone" />`,
    },
    {
      title: '기본 가족 늘리기',
      childTags: `<img className="w-1/4" src=/img/addPerson_icon.png alt="addPerson" />
      <p className="mx-1 font-bold text-xs">한 후에</p>
      <p className="mr-0.5 text-lg font-bold">1</p>
      <img className="w-1/4" src='/img/subEqCard_icon.png' alt="subEqCard" />`,
    },
    {
      title: '집개조',
      childTags: `<div className="flex flex-col items-center h-full">
      <div className="flex items-center justify-center basis-2/5">
        <p className=" font-bold mr-0.5">1</p>
        <img className="w-1/4" src='/img/reed_icon.png' alt="reed" />
        <p className="mx-1 font-bold text-lg">+</p>
        <img className="w-1/2" src='/img/upgradeRoom_icon.png' alt="upgradeRoom" />
      </div>
      <p className="font-bold text-xs basis-1/5 flex items-center">한 후에</p>
      <div className="flex items-center justify-center basis-2/5">
        <p className=" font-bold mr-0.5">1</p>
        <img className="w-1/4" src='/img/mainEqCard_icon.png' alt="mainEqCard" />
        <p className="mx-1  font-bold">or</p>
        <img className="w-1/4" src='/img/subEqCard_icon.png' alt="subEqCard" />
      </div>
    </div>`,
    },
  ];

  const round3 = [
    {
      title: '채소 종자',
      childTags: `<p className=" text-lg font-bold mr-0.5">+1</p>
      <img className="w-1/3" src=/img/vege_icon.png alt="vegetable" />`,
    },
    {
      title: '돼지 시장🔻',
      childTags: `<p className=" text-lg font-bold mr-0.5">1</p>
      <img className="w-1/3" src=/img/boar_icon.png alt="boar" />`,
    },
  ];

  const round4 = [
    {
      title: '소 시장🔻',
      childTags: `<p className=" text-lg font-bold mr-0.5">1</p>
      <img className="w-1/3" src=/img/cow_icon.png alt="cow" />`,
    },
    {
      title: '동부 채석장🔻',
      childTags: `<p className=" text-lg font-bold mr-0.5">1</p>
      <img className="w-1/3" src='/img/stone_icon.png' alt="stone" />`,
    },
  ];

  const round5 = [
    {
      title: '급한 가족 늘리기',
      childTags: `<img className="w-1/3" src='/img/addPerson2_icon.png' alt="addPerson2" />`,
    },
    {
      title: '밭 농사',
      childTags: `<div className="flex flex-col items-center h-full py-1">
      <div className="w-1/3 basis-2/5 flex items-center">
        <img src='/img/farmland_icon.png' alt="farmland" />
      </div>
      <p className="font-bold basis-1/5">and/or</p>
      <div className="w-1/3 basis-2/5 flex items-center">
        <img  src='/img/grainVege_icon.png' alt="grainVege" />
      </div>
    </div>`,
    },
  ];

  const shuffle = arr => arr.sort(() => Math.random() - 0.5);

  const shuffledRound1 = shuffle(round1);
  const shuffledRound2 = shuffle(round2);
  const shuffledRound3 = shuffle(round3);
  const shuffledRound4 = shuffle(round4);
  const shuffledRound5 = shuffle(round5);

  return (
    <div className="flex flex-wrap ">
      <Box ratio="basis-1/5" isSquare={true} title="농장 확장">
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
      </Box>
      {shuffledRound1.map((info, idx) => {
        return roundArray[idx] ? (
          <Box ratio="basis-1/5" isSquare={true} title={info.title} key={idx}>
            {HTMLReactParser(info.childTags)}
          </Box>
        ) : (
          <RoundBox ratio="basis-1/5" round="1" key={idx} />
        );
      })}
      <div className="basis-1/5  flex flex-col">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="회합 장소"
        >
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
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="곡식 종자"
        >
          <p className="font-bold mr-0.5">+1</p>
          <img className="w-1/4" src="/img/grain_icon.png" alt="grain" />
        </Box>
      </div>
      <Box
        ratio="basis-1/5"
        isSquare={true}
        title="숲🔻"
        onClick={() => updateResource.mutate({})}
      >
        <p className=" text-lg font-bold mr-0.5">3</p>
        <img className="w-1/3" src="/img/wood_icon.png" alt="wood" />
      </Box>
      {shuffledRound2.map((info, idx) => {
        return roundArray[idx + 4] ? (
          <Box
            ratio="basis-1/5"
            isSquare={true}
            title={info.title}
            key={idx + 4}
          >
            {HTMLReactParser(info.childTags)}
          </Box>
        ) : (
          <RoundBox ratio="basis-1/5" round="2" key={idx + 4} />
        );
      })}
      <div className="basis-2/5   flex flex-wrap">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="농지"
        >
          <img className="w-1/3" src="/img/farmland_icon.png" alt="farmland" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="흙 채굴장🔻"
        >
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/soil_icon.png" alt="soil" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="교습"
        >
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
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="갈대밭🔻"
        >
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/reed_icon.png" alt="reed" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="납품팔이"
        >
          <p className=" text-lg font-bold mr-0.5">+2</p>
          <img className="w-1/4" src="/img/food_icon.png" alt="food" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="낚시🔻"
        >
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-1/4" src="/img/food_icon.png" alt="food" />
        </Box>
      </div>
      <div className="basis-2/5 aspect-square	 flex flex-wrap">
        {shuffledRound3.map((info, idx) => {
          return roundArray[idx + 7] ? (
            <Box
              ratio="basis-1/2"
              isSquare={true}
              title={info.title}
              key={idx + 7}
            >
              {HTMLReactParser(info.childTags)}
            </Box>
          ) : (
            <RoundBox ratio="basis-1/2" round="3" key={idx + 7} />
          );
        })}
        {shuffledRound4.map((info, idx) => {
          return roundArray[idx + 9] ? (
            <Box
              ratio="basis-1/2"
              isSquare={true}
              title={info.title}
              key={idx + 9}
            >
              {HTMLReactParser(info.childTags)}
            </Box>
          ) : (
            <RoundBox ratio="basis-1/2" round="4" key={idx + 9} />
          );
        })}
      </div>
      <div className="basis-1/5"></div>
      {shuffledRound5.map((info, idx) => {
        return roundArray[idx + 11] ? (
          <Box
            ratio="basis-1/5"
            isSquare={true}
            title={info.title}
            key={idx + 11}
          >
            {HTMLReactParser(info.childTags)}
          </Box>
        ) : (
          <RoundBox ratio="basis-1/5" round="5" key={idx + 11} />
        );
      })}

      {roundArray[13] ? (
        <Box ratio="basis-1/5" isSquare={true} title="농장 개조">
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
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="6" />
      )}
      <Box ratio="basis-1/5" isSquare={true} onClick={openMajorSlot}>
        <p>주요설비</p>
      </Box>
    </div>
  );
}
