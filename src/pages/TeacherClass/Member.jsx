import React, { useState } from "react";
import MemberComponent from "../../components/MemberComponent";


const Member = ({ students, classId }) => {
  let newStudents = [...students]
  newStudents.shift()

  return (
    <div className="border-2 p-8 rounded-[20px]" >
      <h3 className="pl-4 text-2xl font-semibold">Class Members</h3>
      <p className="pl-4 text-2xl text-[#415A80] mt-8">Teacher</p>
      <div className="py-4 w-full border-b-2 rounded-[8px] shadow-sm">
        <h4 className="pl-4 text-xl">{students[0].fullName}</h4>
      </div>
      <p className="pl-4 text-2xl text-[#415A80] mt-10">Students</p>
      {newStudents?.map((student) => (
        <MemberComponent key={student.id} student={student} classId={classId} />
      ))}
    </div>
  );
};

export default Member;
