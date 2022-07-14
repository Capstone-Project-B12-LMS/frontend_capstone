import React from "react";
import useDeleteCounseling from "../../graphql/DeleteCounseling";
import Button from "../Button";
import Loading from "../Spinner/Loading";

<<<<<<< HEAD
const CounselingPopUp = ({ avatar, setIsClicked, userName, topic }) => {

=======
const CounselingPopUp = ({ avatar, setIsClicked, userName, id, userId }) => {
  console.log(userId);
  const { insertCounselingID, data, loading, error } = useDeleteCounseling();
  const handleDeletedCounseling = async () => {
    await insertCounselingID({
      variables: {
        id: id,
      },
    });
    setIsClicked(false);
  };
>>>>>>> 1c9a816e9af20a9bb5d82862704b1f2c122c6e9c
  return (
    <div
      className={`fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] inset-y-0 z-30 opacity-100 visible`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white w-4/5 md:w-1/2 max-w-[640px] flex flex-col items-center gap-2 py-20 rounded-[30px]">
<<<<<<< HEAD
          <p className="text-xl font-bold">{userName} Request to you</p>
          <p className="text-xl font-medium">"{topic}"</p>
          <img src={avatar} alt="/" className="md:w-[200px] my-7 rounded-full" />
          <div>
            <Button
              text="Confirm"
              styling={`rounded-[20px] px-[30px] py-[5px] text-xl font-bold mr-5`}
              handleClick={() => setIsClicked(false)}
            />
            <Button
              text="Decline"
              styling={`text-[#415A80] bg-white border-[1px] border-[#415A80] rounded-[20px] px-[30px] py-[5px] text-xl font-bold`}
              handleClick={() => setIsClicked(false)}
            />
          </div>
=======
          {loading ? (
            <div className="max-h-[350px] flex items-center justify-center">
              <Loading size={100}/>
            </div>
          ) : (
            <>
              <p className="text-xl font-bold">{userName}</p>
              <p className="text-xl font-medium">Has asked for counseling</p>
              <img
                src={`https://i.pravatar.cc/80?u=${userId}`}
                alt="/"
                className="md:w-[200px] my-5 rounded-full"
              />
              <div>
                <Button
                  text="Confirm"
                  styling={`rounded-[20px] px-[30px] py-[5px] text-xl font-bold mr-5`}
                  handleClick={() => setIsClicked(false)}
                />
                <Button
                  text="Decline"
                  styling={`text-[#415A80] bg-white border-[1px] border-[#415A80] rounded-[20px] px-[30px] py-[5px] text-xl font-bold`}
                  handleClick={handleDeletedCounseling}
                />
              </div>
            </>
          )}
>>>>>>> 1c9a816e9af20a9bb5d82862704b1f2c122c6e9c
        </div>
      </div>
    </div>
  );
};

export default CounselingPopUp;
