import CardPack from './CardPack';
import FarmBoard from './FarmBoard';
import PersonalResourceBoard from './PersonalResourceBoard';

export default function PlayerContainer({ fencePosition, onClick1, onClick2 }) {
  return (
    <div className="flex flex-col w-6/12  bg-clip-content	pl-5">
      <PersonalResourceBoard />
      <div className="flex ">
        <CardPack
          text="보유카드"
          bgColor="bg-purple-100"
          margin="mr-1"
          onClick={onClick1}
        />
        <CardPack
          text="활성화카드"
          bgColor="bg-blue-100"
          margin="ml-1"
          onClick={onClick2}
        />
      </div>
      <FarmBoard fencePosition={fencePosition} />
    </div>
  );
}
