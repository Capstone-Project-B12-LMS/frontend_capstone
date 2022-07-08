import React, { useState } from "react";
import avatar from "../../assets/icons/notif-icon.svg";
import CounselingPopUp from "./CounselingPopUp";

const Counseling = ({ userName }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked && <CounselingPopUp avatar={avatar} userName={userName} setIsClicked={setIsClicked}/>}
      <div
        className="flex justify-between border-b-[1px] cursor-pointer py-2"
        onClick={() => setIsClicked(true)}
      >
        <img src={avatar} alt="/" className="mr-1" />
        <div className="w-full">
          <p className="font-[16px] font-semibold">
            {userName} Ask For Counseling
          </p>
          <span className="text-[#A8A8A8] ">1 days ago</span>
        </div>
      </div>
    </>
      
  );
};

export default Counseling;
