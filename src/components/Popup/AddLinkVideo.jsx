const AddLinkVideo = ({ linkVideo, setMaterial }) => {

  return (
    <div className="flex items-center justify-center ">
      <form onSubmit={(e)=> e.preventDefault()}>
        <div className=" w-[500px]  h-[200px] flex flex-col items-center justify-center rounded-[20px] box-border border-4">
          <h2 className="text-[32px] leading-[48px] mb-[7px]">Add Link</h2>
          <input
            value={ linkVideo === null ? "" : linkVideo }
            placeholder=" Input Link Video"
            className="border-2 w-[340px] h-[28px] rounded-md"
            onChange={(e)=> setMaterial(prev => ({ ...prev, linkVideo: e.target.value}))}
          />
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
