import React, { useState } from "react";
import Button from "../Button";

const ProfilePopUp = ({ reportLink, setReportLink, setIsReportAdded }) => {
  const [tempReportLink, setTempReportLink] = useState(reportLink);
  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] inset-y-0 z-30 opacity-100 visible`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white w-3/4 md:w-1/2 flex flex-col py-20 gap-2 rounded-[30px] items-center">
          <h2>Add Link</h2>
          <input
            placeholder=" Input Link PPT"
            className="border-2 w-4/5 rounded-[10px] p-4 my-6"
            value={tempReportLink}
            onChange={(e) => setTempReportLink(e.target.value)}
          />
          <Button
            text="ADD"
            styling={`w-4/5 py-3 rounded-[20px] text-2xl font-bold`}
            handleClick={() => {
                setReportLink(tempReportLink);
                setIsReportAdded(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePopUp;
