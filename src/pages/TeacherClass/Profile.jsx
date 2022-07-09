import React from "react";
import people_icon from "../../assets/icons/people-icon-vector.svg";
import book_icon from "../../assets/icons/icons-book.svg";
import { Button } from "../../components";
import pencil from "../../assets/img/pencil.png";

const Profile = ({ dataClass, materials }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-4/5 lg:w-[650px] ">
        <div className="flex items-center justify-between">
          <div className="flex border-[1px] border-[#415A80] rounded-[20px] p-5">
            <div className="mr-10">
              <h1 className="text-5xl">
                {dataClass?.class?.findById?.users?.length - 1}
              </h1>
              <p className="text-xl mt-4">Total Students</p>
            </div>
            <img src={people_icon} alt="/" />
          </div>
          <div className="flex border-[1px] border-[#415A80] rounded-[20px] p-5">
            <div className="mr-10">
              <h1 className="text-5xl">{materials.length}</h1>
              <p className="text-xl mt-4">Total Materials</p>
            </div>
            <img src={book_icon} alt="/" />
          </div>
        </div>
        <div>
          <p className="text-2xl mt-5">Status Class</p>
        </div>
        <div className="mt-5">
          <p className="text-2xl">ClassName</p>
          <div className="flex items-center relative">
            <p className="text-2xl border-[1px] p-3 rounded-[10px] border-[#A8A8A8] w-full">
              {dataClass?.class?.findById?.name}
            </p>
            <img src={pencil} alt="/" className="absolute right-[30px]" />
          </div>
        </div>
        <div className="mt-5">
          <p className="text-2xl">Room</p>
          <div className="flex items-center relative">
            <p className="text-2xl border-[1px] p-3 rounded-[10px] border-[#A8A8A8] w-full">
              {dataClass?.class?.findById?.room}
            </p>
            <img src={pencil} alt="/" className="absolute right-[30px]" />
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-2xl">Data Report</p>
          <Button text="ADD" styling={`py-2 px-4 rounded-[10px]`}/>
        </div>
        <Button text="Save Changes" styling={`rounded-[10px] py-3 mt-10 text-2xl font-bold`}/>
        <Button text="Delete Class" styling={`rounded-[10px] py-3 mt-4 bg-[#fff] border-[1px] border-[#415A80] text-[#415A80] text-2xl font-bold`}/>
      </div>
    </div>
  );
};

export default Profile;
