import { useState } from "react";

import Kebab from "../../../assets/icons/kebab-menu.svg"
import Repeat from "../../../assets/icons/repeat.svg"
import InputAnnouncement from "./inputAnnouncement";
import TEST from "./test";


const TeacherClass = () => {

    const [announcement, setAnnouncement] = useState(false);

    const handleClick = () => {
        setAnnouncement(true);
    }
    const handleClickBack = () => {
        setAnnouncement(false);
    }

    return (
        <div>

            {/* 3 Button */}
            <div className="w-[35%] my-[1.5rem] m-[auto]">
                <div className="flex justify-around text-center">
                    <button className="p-[0.5rem] text-black bg-white border-[1px] text-deep-azure border-current rounded-[10px]"><h4>Description</h4></button>
                    <button className="p-[0.5rem] text-black bg-white hover:border-[1px] hover:text-deep-azure hover:border-current rounded-[10px]"><h4>Contents</h4></button>
                    <button className="p-[0.5rem] text-black bg-white hover:border-[1px] hover:text-deep-azure hover:border-current rounded-[10px]"><h4>Feedback</h4></button>
                </div>
            </div>


            {/* Banner */}
            <div className="w-[100%] my-[0.5rem]">
                <div className="bg-[#102773] h-[200px] rounded">
                    <h3 className="text-white text-[2rem] px-[2rem] py-[8rem]">Flutter Fullstack Application</h3>
                </div>
            </div>


            {/* Class */}
            <div className="flex my-[2rem]">
                <div className="w-[20%] h-[120px] border-[1px] rounded-[10px] p-[0.5rem] mx-[0.5rem]">
                    <div className="flex justify-between m-1">
                        <h4 className="text-[1.25rem]">Class code</h4>
                        <img src={Kebab} alt="Three dots" className="w-[1.5rem] h-[1.5rem]" />
                    </div>
                    <div className="">
                        <h4 className="text-deep-azure text-[2rem]">pr57md7</h4>
                    </div>
                </div>

                <div className="w-[80%] mx-[0.5rem]">
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

                    <div className="border-[1px] p-[0.5rem] rounded-[10px] flex" onClick={handleClickBack}>
                        <div className="w-[30%]">
                        </div>
                        <div className="w-[70%] p-[2rem]">
                            <h3 className="text-[1.5rem]">This is where you can talk to your class</h3>
                            <p>Use the forums to share announcements, post assignments, and answer student questions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherClass;