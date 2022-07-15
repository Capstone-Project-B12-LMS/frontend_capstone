import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import dot from "../../assets/img/3dot.png";
import useRemoveStudent from "../../graphql/RemoveStudent";
import Loading from "../Spinner/Loading";

const MemberComponent = ({ student, classId }) => {
  const MySwal = withReactContent(Swal);
  const { insertStudentData, data, loading, error } = useRemoveStudent(classId);
  const [isDotClicked, SetIsDotClicked] = useState(false);
  const handleRemoveStudent = (userId) => {
    MySwal.fire({
      title: "Remove Student",
      text: "Are you sure you want to remove this student?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#415A80",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        insertStudentData({
          variables: {
            classId: classId,
            userId: userId,
          },
        });
      }
    });
  };
  const handleClickedOutside = () => {
    isDotClicked && SetIsDotClicked(false);
  };

  return (
    <>
      {loading ? (
        <Loading size={100} />
      ) : (
        <div
          className="flex py-4 w-full border border-solid items-center relative"
          onClick={handleClickedOutside}
        >
          <img src={`https://i.pravatar.cc/100?u=${student.id}`} alt="avatar" className="ml-4 w-[60px] h-[60px] rounded-full mr-4"/>
          <h4 className="pl-4 text-xl">{student.fullName}</h4>
          <img
            src={dot}
            alt="/"
            className="pr-4 cursor-pointer ml-auto"
            onClick={() => SetIsDotClicked(true)}
          />
          {isDotClicked && (
            <p
              className="text-sm absolute right-[60px] p-3 rounded-[10px] shadow-md cursor-pointer font-medium"
              onClick={() => handleRemoveStudent(student.id)}
            >
              Remove Student
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default MemberComponent;
