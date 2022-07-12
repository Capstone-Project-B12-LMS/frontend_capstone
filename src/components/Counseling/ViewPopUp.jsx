import React from "react";
import avatar from "../../assets/icons/notif-icon.svg";
import close from "../../assets/icons/close-icon.svg";

const ViewPopUp = ({ dataCounseling, setIsViewClicked }) => {
  console.log(dataCounseling);
  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] inset-y-0 z-30 opacity-100 visible`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white w-4/5 md:w-1/2 flex flex-col py-5 gap-2 rounded-[30px]">
          <div className="flex justify-between items-center mb-8 px-10">
            <h3 className="text-2xl">Notification</h3>
            <img src={close} alt="/" className="w-8 cursor-pointer" onClick={() => setIsViewClicked(false)} />
          </div>
          {dataCounseling.map((user, idx) => (
            <div className="w-full flex items-center border-b-[1px] shadow-md px-10 py-3 rounded-[8px]">
              <img src={avatar} alt="/" className="mr-5" />
              <div>
                <p className="text-xl font-semibold mb-1" key={idx}>
                  {user.user.fullName} has asked for counseling{" "}
                </p>
                <span className="text-[#A8A8A8]">1 days ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewPopUp;
