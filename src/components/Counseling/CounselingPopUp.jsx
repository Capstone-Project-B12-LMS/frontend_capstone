import React from "react";
import Button from "../Button";

const CounselingPopUp = ({ avatar, setIsClicked, userName }) => {

  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] inset-y-0 z-30 opacity-100 visible`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white w-4/5 md:w-1/2 max-w-[640px] flex flex-col items-center gap-2 py-20 rounded-[30px]">
          <p className="text-xl font-bold">{userName}</p>
          <p className="text-xl font-medium">Has asked for counseling</p>
          <img src={avatar} alt="/" className="md:w-[200px] my-5" />
          <div>
            <Button
              text="Confirm"
              styling={`rounded-[20px] px-[30px] py-[5px] text-xl font-bold mr-5`}
              handleClick={() => setIsClicked(false)}
            />
            <Button
              text="Decline"
              styling={`text-[#415A80] bg-white border-[1px] border-[#415A80] rounded-[20px] px-[30px] py-[5px] text-xl font-bold`}
              handleClick={() => setIsClicked(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselingPopUp;
