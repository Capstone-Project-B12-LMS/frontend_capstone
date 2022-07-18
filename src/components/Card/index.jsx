import { Link } from "react-router-dom";

const Card = ({
  title,
  code,
  thumbnail = "https://i.ibb.co/k6wjmXK/thumbnail-class.png",
  url,
  status
}) => {
  return (
    <Link to={url}>
      <div className="bg-white rounded overflow-hidden shadow-md w-full h-full flex flex-col rounded-2xl relative">
        <span 
          className={`right-0 font-medium px-3 py-1 rounded-[5px] absolute bg-[rgba(255,255,255,.2)] ${status === "ACTIVE" ? "text-[#0be881]" : "text-[#f53b57]"}`}
        >
          { status }
        </span>
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-[100%] h-[160px] object-cover"
        />
        <div className="p-6 h-full flex flex-col justify-between">
          <h3 className="text-2xl font-medium text-black">{title}</h3>
          <p className="text-base text-[#A9A9A9] font-normal">
            Code Class: <span className="text-black font-bold">{code}</span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
