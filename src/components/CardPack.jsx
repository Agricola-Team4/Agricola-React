import { useBackgroundContext } from '../context/BackgroundContext';

export default function CardPack({ text, bgColor, margin, pid }) {
  const { openP1HaveSlot, openP1ActSlot, openP2HaveSlot, openP2ActSlot } =
    useBackgroundContext();

  return (
    <div
      className={`basis-1/2 rounded-lg bg-clip-content ${margin} mb-1 border-1 border-black flex justify-center items-center font-bold cursor-pointer text-sm ${bgColor} z-0`}
      onClick={
        {
          1: text === '보유카드' ? openP1HaveSlot : openP1ActSlot,
          2: text === '보유카드' ? openP2HaveSlot : openP2ActSlot,
        }[pid]
      }
    >
      {text}
    </div>
  );
}
