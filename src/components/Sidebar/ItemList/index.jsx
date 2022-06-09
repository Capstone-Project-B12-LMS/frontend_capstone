import { NavLink } from "react-router-dom"

const ItemList = ({type, text, path, icon , spacing , clicked }) => {

    return(
        <>
            {
                type === 'list' ?

                <NavLink 
                    to={path} 
                    className={({isActive}) => `w-full h-full flex items-center ${spacing} ` + (isActive ? 'bg-dark-blue' : '')} title={text}
                >
                    <div className="flex items-center">
                        <img src={icon} alt="icon" className="w-[32px] h-[32px] pr-2.5"/>
                        <span className="text-xl text-black font-normal capitalize">{text}</span>
                    </div>
                </NavLink>

                : type === 'button' ? 

                <button 
                    className={`w-full h-full flex items-center bg-light-blue hover:bg-dark-blue ${spacing}`}
                    onClick={clicked}
                >
                     <div className="flex items-center">
                        <img src={icon} alt="icon" className="w-[32px] h-[32px] pr-2.5"/>
                        <span className="text-xl text-black font-normal capitalize">{text}</span>
                    </div>
                </button> 
                
                : false
            }
        </>
    )
}

export default ItemList