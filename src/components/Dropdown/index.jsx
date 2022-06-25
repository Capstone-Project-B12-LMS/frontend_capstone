import { useState,useRef } from "react";
import { useClickOutSide } from "../../utils/hooks/useClickOutside";

import ItemList from "../Sidebar/ItemList";



const Dropdown = ({children,list}) => {

    const [expand,setExpand] = useState(false)
    const ref = useRef(null)

    const closeExpand = ()=> setExpand(false);

    useClickOutSide(ref,expand,closeExpand)

    return(
        <div className="relative flex items-center ml-12">
            <button className="flex items-center bg-transparent" ref={ref} onClick={()=> setExpand(!expand)}>
                {children}
            </button>
            <ul className={`w-full bg-light-blue min-w-[200px] absolute top-[130px] right-0 ${expand ? 'visible' : 'invisible'}`}>
                {
                    list.map(item => 
                        <li className="h-[64px] hover:bg-dark-blue" key={item.text}>
                            <ItemList {...item} spacing='pl-4'/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Dropdown