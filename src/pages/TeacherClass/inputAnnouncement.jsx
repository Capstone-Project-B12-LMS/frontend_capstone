import { useState, } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Components
import { Button, PopUp, Material, } from '../../components';
import AddLinkPPT from '../../components/Popup/AddLinkPPT';
import AddLinkVideo from '../../components/Popup/AddLinkVideo';

//Assets
// import UploadIcon from "../../assets/icons/upload.svg"

// Graphql
import { NEW_CONTENT_CLASS, UPDATE_CONTENT_CLASS } from '../../graphql/ClassMutation';
import { FIND_CLASS_MATERIAL } from '../../graphql/MaterialQuery';


const InputAnnouncement = ({ material, setMaterial, materialId, updateMode, setUpdateMode }) => {

    const params = useParams();

    // State
    const [powerPoint, setPowerPoint] = useState(false);
    const [videoLink, setVideoLink] = useState(false);
    // const [updateMode, setUpdateMode] = useState(false);


    // Event handler

    const showPopupPPT = (e, show = !powerPoint) => setPowerPoint(show);
    const showPopupVideoLink = (e, show = !videoLink) => setVideoLink(show);

    const showLoading = () => {
        Swal.fire({
            title: "Please wait ....",
            html: "Process",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading()
            }
        })
    }

    //Graphql
    const [addData,] = useMutation(NEW_CONTENT_CLASS, {
        refetchQueries: [FIND_CLASS_MATERIAL],
        onCompleted: data => Swal.fire("Materi telah terinput"),
        onError: error => Swal.fire("Terjadi error"),
    });

    const [updateData,] = useMutation(UPDATE_CONTENT_CLASS, {
        refetchQueries: [FIND_CLASS_MATERIAL],
        onCompleted: data => Swal.fire("Materi telah terinput"),
        onError: error => Swal.fire("Terjadi error")
    })

    const handleSubmit = async (e) => {
        if (material.title === "" && material.description === "") {
            Swal.fire("Mohon isi title dan deskripsi")
        }
        else if (material.title === "") {
            Swal.fire("Mohon isi title")
        } else if (material.description === "") {
            Swal.fire("Mohon isi deksripsi")
        } else {
            e.preventDefault();
            await
                showLoading();
            addData({
                variables: {
                    classId: params.id,
                    title: material.title,
                    content: material.description,
                    video: material.linkVideo,
                    file: material.linkPowerPoint,
                    point: 100
                }
            })
            setMaterial({
                title: "",
                description: "",
                linkVideo: null,
                linkPowerPoint: null
            })
        }
    }

    const handleUpdate = async (e) => {
        if (material.title === "" && material.description === "") {
            Swal.fire("Mohon isi title dan deskripsi")
        }
        else if (material.title === "") {
            Swal.fire("Mohon isi title")
        } else if (material.description === "") {
            Swal.fire("Mohon isi deksripsi")
        } else {
            e.preventDefault();
            await
                showLoading();
            updateData({
                variables: {
                    id: materialId,
                    classId: params.id,
                    title: material.title,
                    content: material.description,
                    video: material.linkVideo,
                    file: material.linkPowerPoint,
                    point: 100
                }
            })
            setUpdateMode(false);
            setMaterial({
                title: "",
                description: "",
                linkVideo: null,
                linkPowerPoint: null
            });
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setMaterial({
            title: "",
            description: "",
            linkVideo: null,
            linkPowerPoint: null
        })
        setUpdateMode(false);
    }

    const isiMaterial = {
        title: material.title,
        content: material.description,
        videoUrl: material.linkVideo,
        fileUrl: material.linkPowerPoint
    }


    // console.log(materialId)


    return (
        <>
            <div className=''>
                <PopUp
                    styling={"w-[500px]  max-h-min"}
                    show={powerPoint}
                    setShow={showPopupPPT}
                >
                    <AddLinkPPT
                        linkPowerPoint={material.linkPowerPoint}
                        setMaterial={setMaterial}
                    />
                </PopUp>
                <PopUp
                    styling={"w-[500px] max-h-min"}
                    show={videoLink}
                    setShow={showPopupVideoLink}
                >
                    <AddLinkVideo
                        linkVideo={material.linkVideo}
                        setMaterial={setMaterial}
                    />
                </PopUp>

                <div className='mb-[1rem]'>
                    <h2>Title</h2>
                    <input
                        placeholder='Write your title here'
                        className='w-[100%] p-[1rem]'
                        value={material.title}
                        onChange={(e) => setMaterial(prev => ({ ...prev, title: e.target.value }))}
                        required
                    />
                    <ReactQuill
                        theme='snow'
                        placeholder='Write your announcement here'
                        preserveWhitespace
                        value={material.description}
                        onChange={(value) => setMaterial(prev => ({ ...prev, description: value }))}
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
                                updateMode ?
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
                            material.linkVideo && <Material assets={isiMaterial} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default InputAnnouncement;