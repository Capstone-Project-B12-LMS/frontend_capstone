import BrandLogo from "../Sidebar/BrandLogo";
import Hamburger from '../../images/icons/hamburger-icon.svg';


const Header = ({ usingToggle ,toggleClick , children }) => {
    return(
        <header className="w-full h-[120px] px-10 bg-light-blue sticky top-0 flex">
            {
                usingToggle ? 

                <button className="bg-transparent w-[32px] h-[24px] self-center mr-10" onClick={toggleClick}>
                    <img src={Hamburger} alt="icon"/>
                </button> : false
            }
            <nav className="w-full flex justify-between">
                <BrandLogo wrapperImgStyle='w-[200px] h-[50px]'/>
                {children}
            </nav>
        </header>
    )
}

export default Header