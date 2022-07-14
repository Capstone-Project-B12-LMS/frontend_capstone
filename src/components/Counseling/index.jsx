import React, { useState } from "react";
import avatar from "../../assets/icons/notif-icon.svg";
import CounselingPopUp from "./CounselingPopUp";

<<<<<<< HEAD
const Counseling = ({ data }) => {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      { isClicked && 
        <CounselingPopUp 
          avatar={ `https://i.pravatar.cc/150?u=${data.user.id}` } 
          userName={data.user.fullName} 
          setIsClicked={ setIsClicked }
          topic={data.topic}
        /> 
      }
      <div
        className="flex justify-between border-b-[1px] cursor-pointer py-4"
        onClick={() => setIsClicked(true)}
      >
        <img 
          src={`https://i.pravatar.cc/150?u=${data.user.id}`} 
          alt="avatar" 
          className="mr-5 w-[50px] h-[50px] rounded-full" 
        />
=======
const Counseling = ({ userName, id, userId}) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(userId)
  return (
    <>
      {isClicked && <CounselingPopUp avatar={avatar} userName={userName} setIsClicked={setIsClicked} id={id} userId={userId}/>}
      <div
        className="flex justify-between items-center border-b-[1px] cursor-pointer py-2"
        onClick={() => setIsClicked(true)}
      >
        <img src={`https://i.pravatar.cc/50?u=${userId}`} alt="/" className="mr-1 rounded-full" />
>>>>>>> 1c9a816e9af20a9bb5d82862704b1f2c122c6e9c
        <div className="w-full">
          <p className="font-[16px] font-semibold">
            {data.user.fullName}
          </p>
          <span className="text-[#A8A8A8] text-[14px] mt-2">{data.topic}</span>
        </div>
      </div>
    </>
  );
};

export default Counseling;
