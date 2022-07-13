import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import swal from 'sweetalert';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Components
import { Button, PopUp, Material, Loading } from '../../components';
import AddLinkPPT from '../../components/Popup/AddLinkPPT';
import AddLinkVideo from '../../components/Popup/AddLinkVideo';

//Assets
import UploadIcon from "../../assets/icons/upload.svg"

// Graphql
import { NEW_CONTENT_CLASS, UPDATE_CONTENT_CLASS } from '../../graphql/ClassMutation';
import { FIND_CLASS_MATERIAL, FIND_MATERIAL_BY_ID } from '../../graphql/MaterialQuery';


const InputAnnouncement = ({ targetMaterial }) => {

    const params = useParams();

    // State
    const [powerPoint, setPowerPoint] = useState(false);
    const [videoLink, setVideoLink] = useState(false);

    const [materiUpdate, setMateriUpdate] = useState(targetMaterial)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(null);
    const [linkPowerPoint, setLinkPowerPoint] = useState(null);
    const [linkVideo, setLinkVideo] = useState(null);


    const baseYt = "https://youtu.be/"


    // Event handler

    const showPopupPPT = (e, show = !powerPoint) => setPowerPoint(show);
    const showPopupVideoLink = (e, show = !videoLink) => setVideoLink(show);

    const getLinkPPT = (linkPPT) => {
        setLinkPowerPoint(linkPPT);
    }
    const getLinkVideo = (linkVideo) => {
        setLinkVideo(linkVideo);
    }




    useEffect(() => {
        if (targetMaterial.length !== 0) {
            setTitle(materiUpdate[0]?.title)
            setDescription(materiUpdate[0]?.content)
            setLinkVideo(materiUpdate[0]?.videoUrl)
            setLinkPowerPoint(materiUpdate[0]?.fileUrl)
        }
    }, [])


    //Graphql
    const [addData,] = useMutation(NEW_CONTENT_CLASS, {
        refetchQueries: [FIND_CLASS_MATERIAL],
        onCompleted: data => console.log(data, "Berhasil"),
        onError: error => console.log("Terjadi error", error),
    });
    const [updateData, { dataUpdate, loadingUpdate }] = useMutation(UPDATE_CONTENT_CLASS, {
        refetchQueries: [FIND_CLASS_MATERIAL],
        onCompleted: data => console.log("Berhasil update data", data),
        onError: error => console.log("Terjadi error", error)
    })

    const handleSubmit = (e) => {
        if (title == "" && description == "") {
            swal("Mohon isi title dan deskripsi")
        }
        else if (title == "") {
            swal("Mohon isi title")
        } else if (description == "") {
            swal("Mohon isi deksripsi")
        } else {
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
            setLinkVideo(null);
            setLinkPowerPoint(null);
        }
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        updateData({
            variables: {
                id: materiUpdate[0]?.id,
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
        setLinkVideo(null);
        setLinkPowerPoint(null);
        setMateriUpdate(null);
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setTitle("");
        setDescription("");
        setLinkVideo(null);
        setLinkPowerPoint(null);
        setMateriUpdate(null);
    }

    const isiMaterial = {
        title,
        content: description,
        videoUrl: linkVideo,
        fileUrl: linkPowerPoint
    }



    // console.log("ini dari input", materiUpdate[0]?.content)
    // console.log(targetMaterial)

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
                        required
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
                            {
                                materiUpdate ?

                                    <Button
                                        styling={"rounded-[10px] px-[1rem] ml-[1rem]"}
                                        text={"Update"}
                                        handleClick={handleUpdate}
                                    />
                                    :
                                    <Button
                                        styling={"rounded-[10px] px-[1rem] ml-[1rem]"}
                                        text={"Posting"}
                                        handleClick={handleSubmit}
                                    />
                            }
                        </div>
                    </div>
                    <div className='mt-[4rem]'>
                        {
                            linkVideo && <Material assets={isiMaterial} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default InputAnnouncement;