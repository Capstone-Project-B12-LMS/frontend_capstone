import React from "react";
import avatar from "../../assets/icons/notif-icon.svg";
import close from "../../assets/icons/close-icon.svg";

<<<<<<< HEAD
const ViewPopUp = ({ dataCounseling, setIsViewClicked }) => {
  // console.log(dataCounseling);
=======
const ViewPopUp = ({ dataCounseling, setIsViewClicked}) => {
  console.log(dataCounseling);
>>>>>>> 1c9a816e9af20a9bb5d82862704b1f2c122c6e9c
  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)] z-30 opacity-100 visible`}
    >
<<<<<<< HEAD
      <div className="w-[650px] max-h-[500px] bg-white p-10 rounded-[20px] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">Notification</h3>
          <img src={close} alt="/" className="w-8 cursor-pointer" onClick={() => setIsViewClicked(false)} />
        </div>
        <div className="w-full mt-8 overflow-auto">
          {
            dataCounseling.map(counselling => (
              <div className="w-full flex border-b-[1px] py-6" key={counselling.id}>
                <img
                  src={`https://i.pravatar.cc/150?u=${counselling.user.id}`}
                  alt="avatar"
                  className="mr-5 w-[50px] h-[50px] rounded-full"
                />
                <div>
                  <p className="text-xl font-semibold mb-1">
                    {counselling.user.fullName}
                  </p>
                  <span className="text-[#A8A8A8] leading-7 mt-3">{counselling.content}</span>
                </div>
=======
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white w-4/5 md:w-1/2 flex flex-col py-5 gap-2 rounded-[30px]">
          <div className="flex justify-between items-center mb-8 px-10">
            <h3 className="text-2xl">Notification</h3>
            <img src={close} alt="/" className="w-8 cursor-pointer" onClick={()=>setIsViewClicked(false)}/>
          </div>
          {dataCounseling.map((user) => (
            <div className="w-full flex items-center border-b-[1px] shadow-md px-10 py-3 rounded-[8px]">
              <img src={`https://i.pravatar.cc/50?u=${user.user.id}`} alt="/" className="mr-5 rounded-full" />
              <div>
                <p className="text-xl font-semibold mb-1">
                  {user.user.fullName} has asked for counseling{" "}
                </p>
                <span className="text-[#A8A8A8]">1 days ago</span>
>>>>>>> 1c9a816e9af20a9bb5d82862704b1f2c122c6e9c
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ViewPopUp;
