import React, { useState } from "react";
import avatar from "../../assets/icons/notif-icon.svg";
import CounselingPopUp from "./CounselingPopUp";

const Counseling = ({ userName, id, userId }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked && <CounselingPopUp avatar={avatar} userName={userName} setIsClicked={setIsClicked} id={id} userId={userId} />}
      <div
        className="flex justify-between items-center border-b-[1px] cursor-pointer py-2"
        onClick={() => setIsClicked(true)}
      >
        <img src={`https://i.pravatar.cc/50?u=${userId}`} alt="/" className="mr-1 rounded-full" />
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
