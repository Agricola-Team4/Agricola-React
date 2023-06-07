export default function CardPack({ text, bgColor, onClick }) {
  return (
    <div
      className={`basis-1/2 rounded-lg bg-clip-content m-1 aspect-square border-8 border-orange-600 flex justify-center items-center font-bold cursor-pointer ${bgColor}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
