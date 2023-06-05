import React from 'react';
import Box from './Box';
import RoundBox from './RoundBox';
import useResource from '../hooks/useResource';
import { action } from '../constants/actionConstants';
import MajorCardBox from './MajorCardBox';

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
        title={action[3].title}
        onClick={() => updateResource.mutate()}
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
