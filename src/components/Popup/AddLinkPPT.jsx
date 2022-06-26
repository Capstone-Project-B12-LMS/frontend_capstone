import { useState } from "react";



const AddLinkPPT = ({ func }) => {

  const [linkPPT, setLinkPPT] = useState("");

  const handleChange = (e) => {
    setLinkPPT(e.target.value)
  }
  func(linkPPT);

  return (
    <div className="flex items-center justify-center ">
      <div className=" w-[500px]  h-[200px] flex flex-col items-center justify-center rounded-[20px] box-border border-4">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Add Link</h2>
        <input
          placeholder=" Input Link PPT"
          className="border-2 w-[340px] h-[28px] rounded-md"
          onChange={handleChange}
        ></input>
        <button
          className="w-[340px] h-[28px] rounded-lg mt-4"
          onClick={() => document.getElementById('parent').click()}
        >ADD</button>
      </div>
    </div>
  );
};

export default AddLinkPPT;
