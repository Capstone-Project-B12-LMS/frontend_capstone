import React, { useState } from "react";
import MemberComponent from "../../components/MemberComponent";
import { useSelector } from "react-redux";

const Member = ({ students, classId }) => {
  const { dataLogin } = useSelector((state) => state.login);
  const newStudents = students.filter(
    (student) => student.email !== dataLogin.email
  );

  return (
    <div className="border-2 py-4 rounded-[20px]">
      <h3 className="pl-4 text-2xl font-semibold">Class Members</h3>
      <p className="pl-4 text-2xl text-[#415A80] mt-8">Teacher</p>
      <div className="py-4 w-full border-b-2 rounded-[8px] shadow-sm flex items-center">
        <img src={`https://i.pravatar.cc/80?u=${dataLogin.id}`} alt="" className="rounded-full mx-4"/>
        <h4 className="pl-4 text-xl">{dataLogin.fullName}</h4>
      </div>
      <p className="pl-4 text-2xl text-[#415A80] mt-10">Students</p>
      {newStudents?.map((student) => (
        <MemberComponent key={student.id} student={student} classId={classId} />
      ))}
    </div>
  );
};

export default Member;
