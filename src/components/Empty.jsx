import { playerRed, playerBlue, resource } from '../constants/imageContants';
export default function Empty({ isStable, onClick, pid }) {
  return (
    <div
      className="bg-empty bg-clip-border bg-contain bg-no-repeat w-full h-full flex justify-center items-center p-2"
      onClick={onClick}
    >
      {isStable && (
        <div className="w-full h-full flex">
          <div className="basis-1/2  flex justify-center items-center">
            <img
              src={pid % 2 ? playerRed.stable : playerBlue.stable}
              alt="외양간"
            />
          </div>
          <div className="basis-1/4"></div>
          <div className="basis-1/2 flex justify-center items-center">
            {/* <img src={resource.cow} alt="동물" /> */}
          </div>
        </div>
      )}
    </div>
  );
}
