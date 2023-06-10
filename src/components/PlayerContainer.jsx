import CardPack from './CardPack';
import FarmBoard from './FarmBoard';
import PersonalResourceBoard from './PersonalResourceBoard';

export default function PlayerContainer({ pid }) {
  return (
    <div className="flex flex-col w-6/12  bg-clip-content	pl-5">
      <PersonalResourceBoard pid={pid} />
      <div className="flex ">
        <CardPack
          pid={pid}
          text="보유카드"
          bgColor="bg-purple-100"
          margin="mr-1"
        />
        <CardPack
          pid={pid}
          text="활성화카드"
          bgColor="bg-blue-100"
          margin="ml-1"
        />
      </div>
      <FarmBoard pid={pid} />
    </div>
  );
}
