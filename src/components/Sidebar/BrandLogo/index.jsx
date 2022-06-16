import Logo from '../../../assets/icons/brand-logo.svg';

import { Link } from "react-router-dom";


const BrandLogo = ({wrapperImgStyle,logoClick}) => {
  
  return (
    <div className="flex justify-center my-8" onClick={logoClick}>
      <Link to="/dashboard/home" className="hover:opacity-80">
          <div className={`${wrapperImgStyle} overflow-hidden`}>
              <img
                src={Logo}
                alt="brand-logo"
                className="w-full h-full object-cover"
              />
          </div>
      </Link>
    </div>
  );
};

export default BrandLogo;
