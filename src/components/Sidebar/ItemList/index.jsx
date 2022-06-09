import { NavLink } from "react-router-dom"

const ItemList = ({text, path, icon , spacing, linkOnClick }) => {

    const handleClick = (e) =>{
        if(path) return false;
        e.preventDefault();
        return linkOnClick();
    }

    return(
        <NavLink 
            to={path} 
            className={({isActive}) => `w-full h-full flex items-center ${spacing} ` + (isActive ? 'bg-dark-blue' : '')} title={text}
            onClick={handleClick}
        >
            <div className="flex items-center">
                <img src={icon} alt="icon" className="w-[32px] h-[32px] pr-2.5"/>
                <span className="text-xl text-black font-normal capitalize">{text}</span>
            </div>
        </NavLink>
    )
}

export default ItemList