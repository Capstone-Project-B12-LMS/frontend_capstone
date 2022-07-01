import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Components
import { Button, PopUp, Material } from '../../components';
import AddLinkPPT from '../../components/Popup/AddLinkPPT';
import AddLinkVideo from '../../components/Popup/AddLinkVideo';

//Assets
import UploadIcon from "../../assets/icons/upload.svg"

// Graphql
import { NEW_CONTENT_CLASS } from '../../graphql/ClassMutation';



const InputAnnouncement = () => {

    const params = useParams();

    // State
    const [powerPoint, setPowerPoint] = useState(false);
    const [videoLink, setVideoLink] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [linkPowerPoint, setLinkPowerPoint] = useState("");
    const [linkVideo, setLinkVideo] = useState("");

    const isiMaterial = {
        title,
        content: description,
        videoUrl: linkVideo
    }


    // Event handler

    const showPopupPPT = (e, show = !powerPoint) => setPowerPoint(show);
    const showPopupVideoLink = (e, show = !videoLink) => setVideoLink(show);

    const getLinkPPT = (linkPPT) => {
        setLinkPowerPoint(linkPPT);
    }
    const getLinkVideo = (linkVideo) => {
        setLinkVideo(linkVideo);
    }

    const [addData, { data, }] = useMutation(NEW_CONTENT_CLASS, {
        onCompleted: data => console.log(data, "Berhasil"),
        onError: error => console.log("Terjadi error", error),
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        addData({
            variables: {
                classId: params.id,
                title: title,
                content: description,
                video: linkVideo,
                file: linkPowerPoint,
                point: 100
            }
        })
        setTitle("");
        setDescription("");
        setLinkVideo("");
        setLinkPowerPoint("");
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setTitle("");
        setDescription("");
        setLinkVideo("");
        setLinkPowerPoint("");
    }

    // useEffect(() => {

    // }, [])


    return (
        <>
            <div className=''>
                <PopUp
                    styling={"w-[500px]  max-h-min"}
                    show={powerPoint}
                    setShow={showPopupPPT}
                >
                    <AddLinkPPT func={getLinkPPT} />
                </PopUp>
                <PopUp
                    styling={"w-[500px] max-h-min"}
                    show={videoLink}
                    setShow={showPopupVideoLink}
                >
                    <AddLinkVideo func={getLinkVideo} />
                </PopUp>

                <div className='mb-[1rem]'>
                    <h2>Title</h2>
                    <input
                        placeholder='Write your title here'
                        className='w-[100%] p-[1rem]'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ReactQuill
                        theme='snow'
                        placeholder='Write your announcement here'
                        preserveWhitespace
                        value={description}
                        onChange={setDescription}
                    />
                    <div className='flex mt-[2rem] justify-between'>
                        <div className='w-[50%] flex'>
                            <Button
                                text={"Upload PPT"}
                                styling={"rounded-[7px] px-[1rem] mr-[1rem]"}
                                handleClick={setPowerPoint}
                            />
                            <Button
                                text={"Upload Video"}
                                styling={"rounded-[7px] px-[1rem]"}
                                handleClick={setVideoLink}
                            />
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <Button
                                styling={"rounded-[10px] px-[1rem] text-black bg-[#F5F5F5]"}
                                text={"Cancel"}
                                handleClick={handleCancel}
                            />
                            <Button
                                styling={"rounded-[10px] px-[1rem] ml-[1rem]"}
                                text={"Posting"}
                                handleClick={handleSubmit}
                            />
                        </div>
                    </div>
                    {
                        linkVideo && <Material assets={isiMaterial} />
                    }
                </div>
            </div>
        </>
    );
}

export default InputAnnouncement;