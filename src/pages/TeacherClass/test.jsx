<div className="flex my-[2rem]">
    <div className="w-[20%] h-[120px] border-[1px] rounded-[10px] p-[0.5rem] mx-[0.5rem]">
        <div className="flex justify-between m-1">
            <h4 className="text-[1.25rem]">Class code</h4>
            <img src={Kebab} alt="Three dots" className="w-[1.5rem] h-[1.5rem]" />
        </div>
        <div className="">
            <h4 className="text-deep-azure text-[2rem]">pr57md7</h4>
        </div>
    </div>

    <div className="w-[80%] mx-[0.5rem]">
        {
            announcement ?
                <InputAnnouncement />
                :
                <div className="border-[1px] p-[1rem] mb-[1rem] rounded-[10px] flex justify-around">
                    <img className="w-[50px]" src="https://i.ibb.co/y0XWBqF/Ellipse-18.png" alt="icon" />
                    <input
                        onClick={handleClick}
                        className="w-[80%]"
                        type="text"
                        placeholder="Annonce something to your class" />
                    <img className="w-[32px] " src={Repeat} alt="repeat" />
                </div>
        }

        <div className="border-[1px] p-[0.5rem] rounded-[10px] flex" onClick={handleClickBack}>
            <div className="flex justify-between w-full h-[320px] mt-6 px-10 bg-[#79C9DB] rounded-[20px]">
                <p className="text-[40px] text-white font-bold mb-8 uppercase self-end max-w-[1000px]">{data.class.findById.name}</p>
                <img src={Banner_Illust} className="w-[445px] h-[307px] object-cover" alt="illustration" />
            </div>
        </div>
    </div>
</div>

    // const dropdownButton = {
    //     showPopup: [
    //         {
    //             text: "Upload PPT",
    //             icon: UploadIcon,
    //             clicked: showPopupPPT
    //         },
    //         {
    //             text: "Upload Video",
    //             icon: UploadIcon,
    //             clicked: showPopupVideo
    //         }
    //     ],
    //     posting: [
    //         {
    //             text: "Cancel"
    //         },
    //         {
    //             text: "Posting"
    //         }
    //     ],
    // };