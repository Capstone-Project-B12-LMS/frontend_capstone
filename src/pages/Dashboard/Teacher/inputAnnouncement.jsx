import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import { Button } from "../../../components/"

const InputAnnouncement = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
    }

    return (
        <div className='p-[1rem]'>
            <div className='mb-[1rem]'>
                <h3>Title</h3>
                <input
                    placeholder='Write your title here'
                    className='w-[100%] p-[1rem]'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <ReactQuill
                value={description}
                placeholder={"Write your announcement here"}
            />
            <div className='flex mt-[2rem] justify-between'>
                <div className='w-[30%] flex justify-between'>
                    <Button text={"Upload PPT"} styling={"rounded-[7px] px-[1rem]"} />
                    <Button text={"Upload Video"} styling={"rounded-[7px] px-[1rem]"} />
                </div>
                <div className='w-[20%] flex justify-between'>
                    <Button styling={"rounded-[10px] px-[1rem] text-black bg-[#F5F5F5]"} text={"Cancel"} />
                    <Button styling={"rounded-[10px] px-[1rem]"} text={"Posting"} handleClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default InputAnnouncement;