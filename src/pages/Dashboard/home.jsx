import { Link } from "react-router-dom";

import { Card , Button } from "../../components";



const Home = ({ createClass,joinClass }) => {
    return (
        <>
            {/* Banner Dashboard */}

            <div className="w-full h-[320px] mt-6 pl-24 bg-banner-dashboard bg-cover rounded-[30px] flex flex-col justify-center overflow-hidden">
               <h1 className="text-[40px] text-white">Welcome back Veronica !</h1>
               <p className="text-2xl font-light text-white mt-4">Do you want to add a new class ?</p>
               <div className="mt-8">
                <Button 
                    text="Join Class"
                    styling='text-2xl font-medium px-8 py-3 rounded-[20px] mr-4'
                    handleClick={joinClass}
                />
                <Button 
                    text="Create Class"
                    styling='text-2xl font-medium px-8 py-3 rounded-[20px] bg-[#FFFFFF] text-[#415A80]'
                    handleClick={createClass}
                />
               </div>
            </div>

            {/* Recent Class List */}

            <div className="w-full mt-8">
                <div className="flex justify-between">
                    <h2 className="text-2xl text-black font-medium">Active Class</h2>
                    <Link to='/dashboard/class' className="bg-transparent text-black text-base font-medium capitalize">view all</Link>
                </div>
                <div className="grid grid-cols-card-class auto-rows-card-class gap-12 my-8">
                    <Card title={"Tutorial React JS 18 for Beginner"} progress={"75%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class"/>
                    <Card title={"UI/UX Designer for beginner"} progress={"85%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class"/>
                    <Card title={"Test course"} progress={"50%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class"/>
                    <Card title={"UI/UX Designer for beginner"} progress={"85%"} thumbnail="https://i.ibb.co/w7vmxmH/image-2.png" url="/class"/>
                </div>
            </div>
        </>
    );
}

export default Home;


/*

*/