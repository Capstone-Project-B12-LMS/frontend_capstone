import { useState } from "react";

// Assets
import Repeat from "../../assets/icons/repeat.svg"
import Illustration from '../../assets/img/no-description.png'


import InputAnnouncement from "./inputAnnouncement";

const Description = () => {

    const [announcement, setAnnouncement] = useState(false);


    // Handler
    const handleClick = () => {
        setAnnouncement(true);
    }
    const handleClickBack = () => {
        setAnnouncement(false);
    }


    return (
        <div className="mx-[0.5rem]">
            {
                announcement ?
                    <InputAnnouncement />
                    :
                    <div className="border-[1px] p-[1rem] mb-[1rem] rounded-[10px] flex justify-around">
                        <img className="w-[50px]" src="https://i.ibb.co/y0XWBqF/Ellipse-18.png" alt="icon" />
                        <input
                            onClick={handleClick}
                            className="w-[80%]"
                            type="text"
                            placeholder="Annonce something to your class" />
                        <img className="w-[32px] " src={Repeat} alt="repeat" />
                    </div>
            }
            <div className="mt-[2rem] border-[1px] p-[0.5rem] rounded-[10px] flex" onClick={handleClickBack}>
                <div className="w-[30%] flex justify-center">
                    <img src={Illustration} className="w-[350px] h-[250px] object-cover" alt="illustration" />
                </div>
                <div className="w-[70%] p-[2rem]">
                    <h3 className="text-[32px] text-black font-medium">This is where you can talk to your class</h3>
                    <p className="text-xl text-black mt-4">Use the forums to share announcements, post assignments, and answer student questions</p>
                </div>
            </div>
        </div>
    );
}

export default Description;