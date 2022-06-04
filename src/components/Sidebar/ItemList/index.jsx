import { NavLink } from "react-router-dom"

const ItemList = ({text, path, icon}) => {
    return(
        <NavLink to={path} className="w-full h-full flex items-center" title={text}>
            <div className="flex items-center">
                <img src={icon} alt="icon" className="w-[32px] h-[32px] pr-2.5"/>
                <span className="text-xl text-black font-normal capitalize">{text}</span>
            </div>
        </NavLink>
    )
}

export default ItemList