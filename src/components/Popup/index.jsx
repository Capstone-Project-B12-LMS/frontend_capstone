import { useRef } from "react";
import { useClickOutSide } from "../../utils/hooks/useClickOutside";


const PopUp = ({ styling, title, description, children, show, setShow }) => {

    const ref = useRef();
    useClickOutSide(ref, show, setShow);

    return (
        <div className={`fixed inset-0 w-screen height-screen bg-[rgba(0,0,0,0.5)] inset-y-0 z-30 ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div ref={ref} className={`flex flex-col items-center absolute bg-white inset-2/4 translate-y-[-50%] translate-x-[-50%] rounded-[30px] ${styling}`}>
                {title && <h1 className="text-black font-bold text-[32px] capitalize text-center">{title}</h1>}
                {description && <p className="text-2xl text-black font-medium mt-4 text-center">{description}</p>}
                {children}
            </div>
        </div>
    );
}

export default PopUp;