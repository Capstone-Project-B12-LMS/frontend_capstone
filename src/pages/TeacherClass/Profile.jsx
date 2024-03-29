import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Profile = ({ dataClass, materials }) => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [status, setStatus] = useState(dataClass?.class?.findById?.status);
  const [className, setClassName] = useState(dataClass?.class?.findById?.name);
  const [isReportAdded, setIsReportAdded] = useState(false);
  const [reportLink, setReportLink] = useState(
    dataClass?.class?.findById?.reportUrl
  );
  const [isEdit, setEdit] = useState(false);

  const [insertClassData, { loading }] = useMutation(UPDATE_CLASS, {
    refetchQueries: [
      {
        query: GET_CLASS_BYID,
        variables: { id: dataClass?.class?.findById?.id },
      },
    ],
  });

  const [insertClassId] = useMutation(DELETE_CLASS, {
    refetchQueries: [
      {
        query: GET_CLASS_BYID,
        variables: { id: dataClass?.class?.findById?.id },
      },
    ],
  });

  const handleClassChanged = () => {
    const regex = /^[A-Za-z0-9\s\-&]+$/;

    if (!(regex.test(className) && !!className.length)) {
      MySwal.fire({
        title: "Update Failed !",
        text: "Fill the classname with Letters and numbers , allowed symbols : & -",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#415A80",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      });

      return false;
    }

    MySwal.fire({
      title: "Class Data Changes",
      text: "Are you sure you want to save this changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#415A80",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
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
        setEdit(false);
      }
    });
  };
  const handleClassDeleted = () => {
    MySwal.fire({
      title: "Delete Class",
      text: "Are you sure you want to delete this class?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#415A80",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Please await",
          text: "Deleting your class...",
          showConfirmButton: false,
          allowOutsideClick: false,
        });

        try {
          await insertClassId({
            variables: { id: dataClass?.class?.findById?.id },
          });

          MySwal.close();
        } catch (error) {
          MySwal.fire({
            icon: "error",
            title: "Failed",
            text: "Delete Class Failed, try again later.",
          });

          return false;
        }

        return navigate("/dashboard/home", { replace: true });
      }
    });
  };

  useEffect(() => {
    if (isEdit === false) {
      setStatus(dataClass?.class?.findById?.status);
      setClassName(dataClass?.class?.findById?.name);
      setIsReportAdded(false);
      setReportLink(dataClass?.class?.findById?.reportUrl);
    }
  }, [isEdit, dataClass]);

  return (
    <div className="border border-solid rounded-[20px] px-12 py-10 flex justify-center">
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
            <div className="flex border-[1px] rounded-[20px] p-8">
              <div className="mr-10">
                <h1 className="text-5xl">
                  {dataClass?.class?.findById?.users?.length > 0
                    ? dataClass?.class?.findById?.users?.length - 1
                    : 0}
                </h1>
                <p className="text-xl mt-4">Total Students</p>
              </div>
              <img src={people_icon} alt="/" />
            </div>
            <div className="flex border-[1px] rounded-[20px] p-8">
              <div className="mr-10">
                <h1 className="text-5xl">{materials?.length}</h1>
                <p className="text-xl mt-4">Total Materials</p>
              </div>
              <img src={book_icon} alt="/" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-12">
            <p className="text-2xl">Status Class</p>
            {status === "ACTIVE" ? (
              <img
                src={ON}
                alt="on"
                className="cursor-pointer"
                onClick={() => (isEdit ? setStatus("INACTIVE") : false)}
              />
            ) : (
              <img
                src={OFF}
                alt="off"
                className="cursor-pointer"
                onClick={() => (isEdit ? setStatus("ACTIVE") : false)}
              />
            )}
          </div>
          <div className="mt-10">
            <p className="text-2xl">ClassName</p>
            <input
              disabled={!isEdit}
              type="text"
              className="text-2xl border-[1px] py-3 px-6 mt-6 rounded-[10px] border-[#A8A8A8] w-full"
              value={className}
              onChange={(e) => (isEdit ? setClassName(e.target.value) : false)}
            />
          </div>

          <div className="mt-10">
            <p className="text-2xl">Data Report</p>
            <input
              disabled={!isEdit}
              placeholder="Add report url here"
              type="text"
              className="text-2xl border-[1px] py-3 px-6 mt-6 rounded-[10px] border-[#A8A8A8] w-full"
              value={reportLink}
              onChange={(e) => setReportLink(e.target.value)}
            />
          </div>

          <Button
            text={isEdit ? "Save Changes" : "Edit"}
            styling={`rounded-[10px] py-3 mt-12 text-2xl font-bold`}
            handleClick={() => (isEdit ? handleClassChanged() : setEdit(true))}
          />
          <Button
            text={isEdit ? "Cancel" : "Delete Class"}
            styling={`rounded-[10px] py-3 mt-4 text-2xl bg-[#fff] border-[1px] text-[#415A80] te8t-2xl font-bold`}
            handleClick={() => (isEdit ? setEdit(false) : handleClassDeleted())}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
