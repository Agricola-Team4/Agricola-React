import axios from "axios";

export default function ResourceInfo({ img, num, alt, basis }) {
  return (
    <div className={`${basis} flex items-center justify-center flex-col mx-2`}>
      <img
        className="aspect-square"
        src={img}
        alt={alt}
        style={{ height: "28px" }}
      />
      <p className="text-xs font-bold">{num}</p>
    </div>
  );
}
