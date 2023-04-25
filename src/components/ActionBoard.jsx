
import React from 'react';
import Box from './Box';
import RoundBox from './RoundBox';

export default function ActionBoard() {
  const roundArray = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  return (
    <div className="flex flex-wrap ">
      <Box ratio="basis-1/5" isSquare={true} title="농장 확장"></Box>
      {roundArray[0] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">1</p>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="1" />
      )}
      {roundArray[1] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">1</p>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="1" />
      )}
      {roundArray[2] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">1</p>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="1" />
      )}
      {roundArray[3] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">1</p>
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
          <p className=" text-lg font-bold mr-1">+1</p>
          <img className="w-5" src="img/grain_icon.png" alt="" />
        </Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="곡식 종자"
        >
          <p className=" text-lg font-bold mr-1">+1</p>
          <img className="w-5" src="img/grain_icon.png" alt="" />
        </Box>
      </div>
      <Box ratio="basis-1/5" isSquare={true} title="숲🔻"></Box>
      {roundArray[4] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">2</p>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="2" />
      )}
      {roundArray[5] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">2</p>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="2" />
      )}
      {roundArray[6] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">2</p>
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
        ></Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="흙 채굴장🔻"
        ></Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="교습"
        ></Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="갈대밭🔻"
        ></Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="납품 팔이"
        ></Box>
        <Box
          ratio="basis-1/2"
          isSquare={false}
          extraStyle="h-full"
          title="낚시🔻"
        ></Box>
      </div>
      <div className="basis-2/5 aspect-square	 flex flex-wrap">
        {roundArray[7] ? (
          <Box ratio="basis-1/2" isSquare={true}>
            <p className="text-4xl">3</p>
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="3" />
        )}
        {roundArray[8] ? (
          <Box ratio="basis-1/2" isSquare={true}>
            <p className="text-4xl">3</p>
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="3" />
        )}
        {roundArray[9] ? (
          <Box ratio="basis-1/2" isSquare={true}>
            <p className="text-4xl">4</p>
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="4" />
        )}
        {roundArray[10] ? (
          <Box ratio="basis-1/2" isSquare={true}>
            <p className="text-4xl">4</p>
          </Box>
        ) : (
          <RoundBox ratio="basis-1/2" round="4" />
        )}
      </div>
      <div className="basis-1/5"></div>
      {roundArray[11] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">5</p>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="5" />
      )}
      {roundArray[12] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">5</p>
        </Box>
      ) : (
        <RoundBox ratio="basis-1/5" round="5" />
      )}
      {roundArray[13] ? (
        <Box ratio="basis-1/5" isSquare={true}>
          <p className="text-4xl">6</p>
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
