export default function ResourceInfo({ img, num, alt, basis }) {
  return (
    <div className={`${basis}  flex items-center justify-center flex-col mx-2`}>
      <img
        className="aspect-square"
        src={img}
        alt={alt}
        style={{ height: "38px" }}
      />
      <p className="">{num}</p>
    </div>
  );
}
