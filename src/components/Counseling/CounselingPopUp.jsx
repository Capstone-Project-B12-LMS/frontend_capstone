import React from "react";
import useDeleteCounseling from "../../graphql/DeleteCounseling";
import Button from "../Button";
import Loading from "../Spinner/Loading";


const CounselingPopUp = ({setIsClicked, user, topic, id, classId}) => {

  const { insertCounselingID, loading } = useDeleteCounseling(classId);

  const handleDeletedCounseling = async () => {
    await insertCounselingID({
      variables: {
        id: id,
      },
    });
    setIsClicked(false);
  };
  
  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] inset-y-0 z-30 opacity-100 visible`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white w-4/5 md:w-1/2 max-w-[640px] flex flex-col items-center gap-2 py-16 rounded-[30px]">
          {
            loading ? (
              <div className="max-h-[350px] flex items-center justify-center">
                <Loading size={100} />
              </div>
            ) 
            
            : 
            
            (
              <>
                <img
                    src={`https://i.pravatar.cc/200?u=${user.id}`}
                    alt="/"
                    className="md:w-[160px] rounded-full"
                />
                <p className="text-2xl mt-6 font-bold">{ user.fullName }</p>
                <p className="text-base text-slate-400 text-center font-normal leading-7">I want to ask you for guidance <br/> "{topic}"</p>
                <div className="mt-10">
                  <Button
                    text="Confirm"
                    styling={`rounded-[20px] px-[30px] py-[5px] text-xl font-bold mr-5`}
                    handleClick={handleDeletedCounseling}
                  />
                  <Button
                    text="Decline"
                    styling={`text-[#415A80] bg-white border-[1px] border-[#415A80] rounded-[20px] px-[30px] py-[5px] text-xl font-bold`}
                    handleClick={handleDeletedCounseling}
                  />
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default CounselingPopUp;
