import { useState } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

import { Card, Button, PopUp } from "../../components";
import Illustration from '../../assets/img/illustration_1.png';
import JoinClass from "./JoinClass";
import CreateClass from "./CreateClass";



const Home = ({ createClass, joinClass }) => {

    const [collectionClass, setCollectionClass] = useState(0);

    const [classCode, setClassCode] = useState("");

    const HandleSubmitJoin = (e) => {
        e.preventDefault();
        setClassCode("");
    }

    return (
        <>
            {
                collectionClass ?

                    <>
                        {/* Banner Dashboard */}

                        <div className="w-full h-[320px] mt-6 pl-24 bg-banner-dashboard bg-cover rounded-[30px] flex flex-col justify-center overflow-hidden">
                            <h1 className="text-[40px] text-white">Welcome back Veronica !</h1>
                            <p className="text-2xl font-light text-white mt-4">Do you want to add a new class ?</p>
                            <div className="mt-8">
                                <Popup
                                    trigger={
                                        <button className="text-normal font-medium px-6 py-2 rounded-[20px] mr-4 border hover:bg-transparent hover:text-[#415A80] hover:border-[#415A80]">Join Class</button>
                                    }
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                                <div className="text-black">X</div>
                                            </button>
                                            <JoinClass />
                                        </div>
                                    )}
                                </Popup>
                                <Popup
                                    trigger={
                                        <button className="text-normal font-medium px-6 py-2 rounded-[20px] border border-[#415A80] text-[#415A80] bg-transparent hover:bg-[#415A80] hover:text-white">
                                            Create Class</button>
                                    }
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                                <div className="text-black">X</div>
                                            </button>
                                            <CreateClass />
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>

                        {/* Recent Class List */}

                        <div className="w-full mt-8">
                            <div className="flex justify-between">
                                <h2 className="text-2xl text-black font-medium">Active Class</h2>
                                <Link to='/dashboard/class' className="bg-transparent text-black text-base font-medium capitalize">view all</Link>
                            </div>
                            <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
                                <Card title={"Tutorial React JS 18 for Beginner"} progress={"75%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class" />
                                <Card title={"UI/UX Designer for beginner"} progress={"85%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class" />
                                <Card title={"Test course"} progress={"50%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class" />
                                <Card title={"UI/UX Designer for beginner"} progress={"85%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class" />
                            </div>
                        </div>
                    </>

                    :

                    <div className="flex flex-col items-center my-18 mx-auto">
                        <img src={Illustration} alt="illustartion" className="w-[400px] h-[400px]" />
                        <p className="text-black font-normal text-2xl">Anda belum memiliki kelas</p>
                        <div className="mt-8">
                            <div>
                                <Popup
                                    trigger={
                                        <button className="text-normal font-medium px-6 py-2 rounded-[20px] mr-4 border hover:bg-transparent hover:text-[#415A80] hover:border-[#415A80]">Join Class</button>
                                    }
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                                <div className="text-black">X</div>
                                            </button>
                                            <PopUp
                                                title={"Duar"}
                                                description={"Ask the admin or mentor for the class code, then enter the code here"}
                                                style1={"flex items-center justify-center mt-[1rem]"}
                                                style2={"flex flex-col items-center justify-center bg-[#fff] rounded-[30px]"}
                                            >
                                                <form onSubmit={HandleSubmitJoin}>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Input Class Code"
                                                        className="border-[1px] px-4 rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[24px] text-[24px]"
                                                        value={classCode}
                                                        onChange={(e) => setClassCode(e.target.value)}
                                                    />
                                                    <Button
                                                        formBtn={true}
                                                        styling={"rounded-[15px] w-full mt-10 h-[62px] text-[20px] font-bold"}
                                                        text={"JOIN"}
                                                    />
                                                </form>
                                            </PopUp>
                                        </div>
                                    )}
                                </Popup>

                                <Popup
                                    trigger={
                                        <button className="text-normal font-medium px-6 py-2 rounded-[20px] border border-[#415A80] text-[#415A80] bg-transparent hover:bg-[#415A80] hover:text-white">
                                            Create Class</button>
                                    }
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal">
                                            <button className="close" onClick={close}>
                                                <div className="text-black">X</div>
                                            </button>
                                            <CreateClass />
                                        </div>
                                    )}
                                </Popup>
                            </div>

                        </div>
                    </div>
            }
        </>
    );
}

export default Home;


/*

*/