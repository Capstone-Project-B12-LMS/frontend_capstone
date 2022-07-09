import { useState } from "react";
import { useClickOutSide } from "../../utils/hooks/useClickOutside";

const AddLinkVideo = ({ func }) => {

  const [linkVideo, setLinkVideo] = useState(null);
  // const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
  const handleChange = (e) => {
    setLinkVideo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLink = linkVideo.split("").slice(-11).join("");
    // console.log(newLink);
    func(newLink);
  }

  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={handleSubmit}>
        <div className=" w-[500px]  h-[200px] flex flex-col items-center justify-center rounded-[20px] box-border border-4">
          <h2 className="text-[32px] leading-[48px] mb-[7px]">Add Link</h2>
          <input
            value={linkVideo}
            placeholder=" Input Link Video"
            className="border-2 w-[340px] h-[28px] rounded-md"
            onChange={handleChange}
          ></input>
          <button
            className="w-[340px] h-[28px] rounded-lg mt-4"
            onClick={() => document.getElementById('parent').click()}
          >ADD</button>
        </div>
      </form>
    </div >
  );
};

export default AddLinkVideo;
