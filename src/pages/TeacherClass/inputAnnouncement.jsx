import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

// Components
import { Button, PopUp, Material } from '../../components';
import AddLinkPPT from '../../components/Popup/AddLinkPPT';
import AddLinkVideo from '../../components/Popup/AddLinkVideo';

//Assets
import UploadIcon from "../../assets/icons/upload.svg"

// Graphql
import { NEW_CONTENT_CLASS } from '../../graphql/ClassMutation';
import { useEffect } from 'react';
// import { GET_CLASS_BYID } from '../../graphql/ClassQuery';




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

    // const { data, loading } = useQuery(GET_CLASS_BYID, { variables: { id: params.id } });
    const [addData, { data, loading, error }] = useMutation(NEW_CONTENT_CLASS, {
        onCompleted: data => console.log(data, "Berhasil"),
        onError: error => console.log("Terjadi error", error)
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        addData({
            variables: {
                classId: params.id,
                title: title,
                content: description,
                point: 100
            }
        })
        setTitle("");
        setDescription("");
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setTitle("");
        setDescription("");
    }

    useEffect(() => {
        console.log(isiMaterial);
        console.log(title);
        console.log(description);
        console.log(linkVideo);
    }, [])


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
                        value={description}
                        placeholder={"Write your announcement here"}
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