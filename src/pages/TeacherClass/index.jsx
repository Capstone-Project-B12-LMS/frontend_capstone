import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Banner_Illust from '../../assets/img/illustration-class.png'
import Kebab from "../../assets/icons/kebab-menu.svg"
import Repeat from "../../assets/icons/repeat.svg"
import Illustration from '../../assets/img/no-description.png'

import { GET_CLASS_BYID } from "../../graphql/ClassQuery";
import { Tab } from "../../components";

import InputAnnouncement from "./inputAnnouncement";

const TeacherClass = () => {

    const params = useParams();

    const { data, loading } = useQuery(GET_CLASS_BYID, { variables: { id: params.id } });
    const { dataLogin } = useSelector((state) => state.login);

    const Tabpath = [
        { text: "description", path: `.` },
        { text: "content", path: './content' },
        { text: "feedback", path: './feedback' }
    ]

    const [announcement, setAnnouncement] = useState(false);
    const handleClick = () => {
        setAnnouncement(true);
    }
    const handleClickBack = () => {
        setAnnouncement(false);
    }


    return (
        <>

            {

                loading ?
                    <h2>Loading dulu ya guys...</h2>
                    :
                    data?.class?.findById == null ? <h2>Class not found...</h2> :
                        <div id="parent" className="my-6 mx-auto w-full">
                            < Tab list={Tabpath} />

                            <div className="flex justify-between w-full h-[320px] mt-6 px-10 bg-[#79C9DB] rounded-[20px]">
                                <p className="text-[2.5rem] text-white font-bold mb-8 uppercase self-end max-w-[1000px]">{data.class.findById.name}</p>
                                <img src={Banner_Illust} className="w-[445px] h-[307px] object-cover" alt="illustration" />
                            </div>

                            <div className="flex my-[2rem]">
                                <div className="w-[20%] h-[120px] border-[1px] rounded-[10px] p-[0.5rem] mx-[0.5rem]">
                                    <div className="flex justify-between m-1">
                                        <h4 className="text-[1.25rem]">Class code</h4>
                                        <img src={Kebab} alt="Three dots" className="w-[1.5rem] h-[1.5rem]" />
                                    </div>
                                    {
                                        loading ?
                                            <div className="">
                                                <h4 className="text-deep-azure text-[2rem]">Loading class code</h4>
                                            </div>
                                            :
                                            <div className="">
                                                <h4 className="text-deep-azure text-[2rem]">{data.class.findById.code}</h4>
                                            </div>
                                    }

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
                            </div>
                        </div>
            }
        </>
    );
}

export default TeacherClass;