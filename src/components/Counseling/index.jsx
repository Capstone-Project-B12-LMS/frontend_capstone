import React, { useState } from "react";
import avatar from "../../assets/icons/notif-icon.svg";
import CounselingPopUp from "./CounselingPopUp";

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
