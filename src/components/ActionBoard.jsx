import React from 'react';
import Box from './Box';
import RoundBox from './RoundBox';
import farmland from '../assets/images/farmland_icon.png';
import food from '../assets/images/food_icon.png';
import reed from '../assets/images/reed_icon.png';
import soil from '../assets/images/soil_icon.png';
import wood from '../assets/images/wood_icon.png';
import fence from '../assets/images/fence_icon.png';
import first from '../assets/images/first_icon.png';
import jobCard from '../assets/images/jobCard_icon.png';
import subEqCard from '../assets/images/subEqCard_icon.png';
import mainEqCard from '../assets/images/mainEqCard_icon.png';
import sheep from '../assets/images/sheep_icon.png';
import cow from '../assets/images/cow_icon.png';
import boar from '../assets/images/boar_icon.png';
import grainVege from '../assets/images/grainVege_icon.png';
import bread from '../assets/images/bread_icon.png';
import stone from '../assets/images/stone_icon.png';
import addPerson from '../assets/images/addPerson_icon.png';
import addPerson2 from '../assets/images/addPerson2_icon.png';
import upgradeRoom from '../assets/images/upgradeRoom_icon.png';
import vegetable from '../assets/images/vege_icon.png';
import stable from '../assets/images/stable_icon_red.png';
import woodRoom from '../assets/images/woodRoom_icon.png';
import soilRoom from '../assets/images/soilRoom_icon.png';
import stoneRoom from '../assets/images/stoneRoom_icon.png';

export default function ActionBoard() {
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

  return (
    <div className="flex flex-wrap ">
      <Box ratio="basis-1/5" isSquare={true} title="농장 확장">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <p className=" font-bold mr-0.5">5</p>
            <img className="w-3" src={wood} alt="wood" />
            <p className=" font-bold mr-0.5">2</p>
            <img className="w-3" src={reed} alt="reed" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img className="w-7" src={woodRoom} alt="woodRoom" />
          </div>
          <div className="flex items-center">
            <p className=" font-bold mr-0.5">5</p>
            <img className="w-3" src={soil} alt="soil" />
            <p className=" font-bold mr-0.5">2</p>
            <img className="w-3" src={reed} alt="reed" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img className="w-7" src={soilRoom} alt="soilRoom" />
          </div>
          <div className="flex items-center">
            <p className=" font-bold mr-0.5">5</p>
            <img className="w-3" src={stone} alt="stone" />
            <p className=" font-bold mr-0.5">2</p>
            <img className="w-3" src={reed} alt="reed" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img className="w-7" src={stoneRoom} alt="ustoneRoom" />
          </div>
          <p className="mx-1 font-bold">and/or</p>
          <div className="flex items-center">
            <p className=" font-bold mr-0.5">2</p>
            <img className="w-3" src={wood} alt="wood" />
            <p className="mx-1 font-bold text-xs">→</p>
            <img className="w-4" src={stable} alt="stable" />
          </div>
        </div>
      </Box>
      {roundArray[0] ? (
        <Box ratio="basis-1/5" isSquare={true} title={'양시장🔻'}>
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-10" src={sheep} alt="sheep" />
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="1" />
      )}
      {roundArray[1] ? (
        <Box ratio="basis-1/5" isSquare={true} title={'울타리'}>
          <div className="flex items-center">
            <p className=" text-lg font-bold mr-0.5">1</p>
            <img className="w-7" src={wood} alt="wood" />
            <p className="mx-1 text-lg">→</p>
            <img className="w-7" src={fence} alt="fence" />
          </div>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="1" />
      )}
      {roundArray[2] ? (
        <Box ratio="basis-1/5" isSquare={true} title={'주요 설비'}>
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-7" src={mainEqCard} alt="mainEqCard" />
          <p className="mx-1 text-lg font-bold">or</p>
          <img className="w-7" src={subEqCard} alt="subEqCard" />
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="1" />
      )}
      {roundArray[3] ? (
        <Box ratio="basis-1/5" isSquare={true} title={'곡식 활용'}>
          <img className="w-10" src={grainVege} alt="grainVege" />
          <p className="mx-1 font-bold">and/or</p>
          <img className="w-7" src={bread} alt="bread" />
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="1" />
      )}
      <div className="basis-1/5  flex flex-col">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="회합 장소"
        >
          <img className="w-3" src={first} alt="first" />
          <p className="mx-1 font-bold">and/or</p>
          <>
            <p className="font-bold mr-0.5">1</p>
            <img className="w-5" src={subEqCard} alt="subEqCard" />
          </>
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="곡식 종자"
        >
          <p className="font-bold mr-0.5">+1</p>
          <img className="w-5" src="img/grain_icon.png" alt="grain" />
        </Box>
      </div>
      <Box ratio="basis-1/5" isSquare={true} title="숲🔻">
        <p className=" text-lg font-bold mr-0.5">3</p>
        <img className="w-7" src={wood} alt="wood" />
      </Box>
      {roundArray[4] ? (
        <Box ratio="basis-1/5" isSquare={true} title="서부 채석장🔻">
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-7" src={stone} alt="stone" />
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="2" />
      )}
      {roundArray[5] ? (
        <Box ratio="basis-1/5" isSquare={true} title="기본 가족 늘리기">
          <img className="w-7" src={addPerson} alt="addPerson" />
          <p className="mx-1 font-bold text-xs">한 후에</p>
          <p className="mr-0.5 text-lg font-bold">1</p>
          <img className="w-7" src={subEqCard} alt="subEqCard" />
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="2" />
      )}
      {roundArray[6] ? (
        <Box ratio="basis-1/5" isSquare={true} title="집 개조">
          <div className="flex flex-col">
            <div className="flex items-center">
              <p className=" font-bold mr-0.5">1</p>
              <img className="w-5" src={reed} alt="reed" />
              <p className="mx-1 font-bold text-xs">+</p>
              <img className="w-12" src={upgradeRoom} alt="upgradeRoom" />
            </div>
            <p className="mx-1 font-bold text-xs">한 후에</p>
            <div className="flex items-center">
              <p className=" font-bold mr-0.5">1</p>
              <img className="w-7" src={mainEqCard} alt="mainEqCard" />
              <p className="mx-1  font-bold">or</p>
              <img className="w-7" src={subEqCard} alt="subEqCard" />
            </div>
          </div>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="2" />
      )}
      <div className="basis-2/5   flex flex-wrap">
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="농지"
        >
          <img className="w-10" src={farmland} alt="farmland" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="흙 채굴장🔻"
        >
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-7" src={soil} alt="soil" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="교습"
        >
          <div className="flex flex-col">
            <p>직업당</p>
            <div className="flex items-center">
              <>
                <p className="font-bold mr-0.5">1</p>
                <img className="w-5" src={food} alt="food" />
              </>
              <p className="mx-1 text-lg">→</p>
              <>
                <p className="font-bold mr-0.5">1</p>
                <img className="w-7" src={jobCard} alt="jobCard" />
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
          <img className="w-7" src={reed} alt="reed" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="납품팔이"
        >
          <p className=" text-lg font-bold mr-0.5">+2</p>
          <img className="w-7" src={food} alt="food" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="낚시🔻"
        >
          <p className=" text-lg font-bold mr-0.5">1</p>
          <img className="w-7" src={food} alt="food" />
        </Box>
      </div>
      <div className="basis-2/5 aspect-square	 flex flex-wrap">
        {roundArray[7] ? (
          <Box ratio="basis-1/2" isSquare={true} title="채소 종자">
            <p className=" text-lg font-bold mr-0.5">+1</p>
            <img className="w-10" src={vegetable} alt="vegetable" />
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="3" />
        )}
        {roundArray[8] ? (
          <Box ratio="basis-1/2" isSquare={true} title="돼지 시장🔻">
            <p className=" text-lg font-bold mr-0.5">1</p>
            <img className="w-10" src={boar} alt="boar" />
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="3" />
        )}
        {roundArray[9] ? (
          <Box ratio="basis-1/2" isSquare={true} title="소 시장🔻">
            <p className=" text-lg font-bold mr-0.5">1</p>
            <img className="w-10" src={cow} alt="cow" />
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="4" />
        )}
        {roundArray[10] ? (
          <Box ratio="basis-1/2" isSquare={true} title="동부 채석장🔻">
            <p className=" text-lg font-bold mr-0.5">1</p>
            <img className="w-7" src={stone} alt="stone" />
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="4" />
        )}
      </div>
      <div className="basis-1/5"></div>
      {roundArray[11] ? (
        <Box ratio="basis-1/5" isSquare={true} title="급한 가족 늘리기">
          <img className="w-10" src={addPerson2} alt="addPerson2" />
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="5" />
      )}
      {roundArray[12] ? (
        <Box ratio="basis-1/5" isSquare={true} title="밭 농사">
          <div className="flex flex-col items-center">
            <img className="w-10" src={farmland} alt="farmland" />
            <p className="mx-1 font-bold">and/or</p>
            <img className="w-10" src={grainVege} alt="grainVege" />
          </div>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="5" />
      )}
      {roundArray[13] ? (
        <Box ratio="basis-1/5" isSquare={true} title="농장 개조">
          <div className="flex flex-col ">
            <div className="flex items-center">
              <p className="font-bold mr-0.5">1</p>
              <img className="w-5" src={reed} alt="reed" />
              <p className="mx-1 font-bold text-xs">+</p>
              <img className="w-12" src={upgradeRoom} alt="upgradeRoom" />
            </div>
            <p className="mx-1 font-bold text-xs">한 후에</p>
            <div className="flex items-center justify-center">
              <p className="font-bold mr-0.5">1</p>
              <img className="w-5" src={wood} alt="wood" />
              <p className="mx-1 text-lg">→</p>
              <img className="w-5" src={fence} alt="fence" />
            </div>
          </div>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="6" />
      )}
      <Box ratio="basis-1/5" isSquare={true}>
        <p>주요설비</p>
      </Box>
    </div>
  );
}
