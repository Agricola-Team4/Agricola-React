export default function CardPack({ text, bgColor, onClick, margin }) {
  return (
    <div
      className={`basis-1/2 rounded-lg bg-clip-content ${margin} mb-1 border-1 border-black flex justify-center items-center font-bold cursor-pointer text-sm ${bgColor} z-0`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
