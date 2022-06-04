import { Link } from "react-router-dom";


const BrandLogo = ({ img, img_width, img_height, text }) => {
  return (
    <div className="flex justify-center my-8">
      <Link to="/" className="hover:opacity-80">
        {
            img ?
            <div className={`w-[${img_width}] h-[${img_height}] overflow-hidden`}>
                <img
                src={img}
                alt="brand-logo"
                className="w-full h-full object-cover"
                />
            </div>
            : 
            <p className="font-medium text-3xl">{text}</p>
        }
      </Link>
    </div>
  );
};

export default BrandLogo;
