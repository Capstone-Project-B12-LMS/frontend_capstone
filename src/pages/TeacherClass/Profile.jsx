import React, { useState } from "react";
import people_icon from "../../assets/icons/people-icon-vector.svg";
import book_icon from "../../assets/icons/icons-book.svg";
import { Button, Loading } from "../../components";
import ON from "../../assets/icons/ON.svg";
import OFF from "../../assets/icons/OFF.svg";
import pencil from "../../assets/img/pencil.png";
import { UPDATE_CLASS } from "../../graphql/ClassQuery";
import { GET_CLASS_BYID } from "../../graphql/ClassQuery";
import { DELETE_CLASS } from "../../graphql/ClassQuery";
import { useMutation } from "@apollo/client";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import ProfilePopUp from "../../components/ProfilePopUp";

const Profile = ({ dataClass, materials }) => {
  const MySwal = withReactContent(Swal);
  const [status, setStatus] = useState(dataClass?.class?.findById?.status);
  const [className, setClassName] = useState(dataClass?.class?.findById?.name);
  const [isReportAdded, setIsReportAdded] = useState(false);
  const [reportLink, setReportLink] = useState("");
  const [insertClassData, { data, loading, error }] = useMutation(
    UPDATE_CLASS,
    {
      refetchQueries: [
        {
          query: GET_CLASS_BYID,
          variables: { id: dataClass?.class?.findById?.id },
        },
      ],
    }
  );
  const [
    insertClassId,
    { data: deletedClass, loading: loadingDeleted, error: errorDeleted },
  ] = useMutation(DELETE_CLASS, {
    refetchQueries: [
      {
        query: GET_CLASS_BYID,
        variables: { id: dataClass?.class?.findById?.id },
      },
    ],
  });
  const handleAddReport = () => {
    setIsReportAdded(true);
  };
  const handleClassChanged = () => {
    MySwal.fire({
      title: "Class Data Changes",
      text: "Are you sure you want to save this changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#415A80",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        insertClassData({
          variables: {
            id: dataClass?.class?.findById?.id,
            name: className,
            room: "",
            status: status,
            reportUrl: reportLink,
          },
        });
      }
    });
  };
  const handleClassDeleted = async () => {
    MySwal.fire({
      title: "Delete Class",
      text: "Are you sure you want to delete this class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#415A80",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        insertClassId({
          variables: {
            id: dataClass?.class?.findById?.id,
          },
        });
        window.location.pathname = "dashboard";
      }
    });
  };
  return (
    <div className="flex justify-center">
      {loading ? (
        <Loading size={100} />
      ) : (
        <div className="flex flex-col w-4/5 lg:w-[700px] mt-10">
          {isReportAdded && (
            <ProfilePopUp
              setIsReportAdded={setIsReportAdded}
              reportLink={reportLink}
              setReportLink={setReportLink}
            />
          )}
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
                <h1 className="text-5xl">{materials?.length}</h1>
                <p className="text-xl mt-4">Total Materials</p>
              </div>
              <img src={book_icon} alt="/" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-2xl">Status Class</p>
            {status === "ACTIVE" ? (
              <img
                src={ON}
                alt="on"
                className="cursor-pointer"
                onClick={() => setStatus("INACTIVE")}
              />
            ) : (
              <img
                src={OFF}
                alt="off"
                className="cursor-pointer"
                onClick={() => setStatus("ACTIVE")}
              />
            )}
          </div>
          <div className="mt-5">
            <p className="text-2xl">ClassName</p>
            <div className="flex items-center relative">
              <input
                type="text"
                className="text-2xl border-[1px] p-3 rounded-[10px] border-[#A8A8A8] w-full"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
              <img src={pencil} alt="/" className="absolute right-[30px]" />
            </div>
          </div>
          {/* <div className="mt-5">
          <p className="text-2xl">Room</p>
          <div className="flex items-center relative">
            <p className="text-2xl border-[1px] p-3 rounded-[10px] border-[#A8A8A8] w-full">
              {dataClass?.class?.findById?.room}
            </p>
            <img src={pencil} alt="/" className="absolute right-[30px]" />
          </div>
        </div> */}
          <div className="flex justify-between mt-5">
            <p className="text-2xl">Data Report</p>
            <Button
              text="ADD"
              styling={`py-2 px-4 rounded-[10px]`}
              handleClick={handleAddReport}
            />
          </div>
          <Button
            text="Save Changes"
            styling={`rounded-[10px] py-3 mt-10 text-2xl font-bold`}
            handleClick={handleClassChanged}
          />
          <Button
            text="Delete Class"
            styling={`rounded-[10px] py-3 mt-4 bg-[#fff] border-[1px] border-[#415A80] text-[#415A80] text-2xl font-bold`}
            handleClick={handleClassDeleted}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
