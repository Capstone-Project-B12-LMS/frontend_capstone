import { useState, } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Components

import { Button, PopUp, Material, Spinner } from '../../components';
import AddLinkPPT from '../../components/Popup/AddLinkPPT';
import AddLinkVideo from '../../components/Popup/AddLinkVideo';
import ChangeClassTeacher from './ChangeClassTeacher';

//Assets

import Repeat from '../../assets/icons/repeat.svg'

// Graphql

import { NEW_CONTENT_CLASS, UPDATE_CONTENT_CLASS } from '../../graphql/ClassMutation';
import { FIND_CLASS_MATERIAL } from '../../graphql/MaterialQuery';




const InputAnnouncement = ({ material, setMaterial, materialId, updateMode, setUpdateMode, setMaterialId}) => {

    const params = useParams();

    // State

    const [powerPoint, setPowerPoint] = useState(false);
    const [videoLink, setVideoLink] = useState(false);
    const [openChangeClass, setOpenChangeClass] = useState(false);
  


    // Event handler

    const showPopupPPT = (e, show = !powerPoint) => setPowerPoint(show);
    const showPopupVideoLink = (e, show = !videoLink) => setVideoLink(show);


    //Graphql

    const [addData , {loading: loadingAdd}] = useMutation(NEW_CONTENT_CLASS, {
        refetchQueries: [FIND_CLASS_MATERIAL],
        onCompleted: () => Swal.fire("Success","Your material has been successfully uploaded","success"),
        onError: () => Swal.fire("Upload Failed", "Material failed to upload, please try again", "error"),
    });

    const [updateData, {loading : loadingUpdate}] = useMutation(UPDATE_CONTENT_CLASS, {
        refetchQueries: [FIND_CLASS_MATERIAL],
        onCompleted: () => Swal.fire("Success","Your material has been successfully update","success"),
        onError: () => Swal.fire("Update Failed", "Material failed to update, please try again", "error")
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
            addData({
                variables: {
                    classId: params.id,
                    title: material.title,
                    content: material.description,
                    video: !!material.linkVideo ? material.linkVideo.split("").slice(-11).join("") : null,
                    file: !!material.linkPowerPoint ? material.linkPowerPoint : null,
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
            updateData({
                variables: {
                    id: materialId,
                    classId: params.id,
                    title: material.title,
                    content: material.description,
                    video: !!material.linkVideo ? material.linkVideo.split("").slice(-11).join("") : null,
                    file: !!material.linkPowerPoint ? material.linkPowerPoint : null,
                    point: 100
                }
            })
            setUpdateMode(false);
            setMaterial({
                title: "",
                description: "",
                linkVideo: null,
                linkPowerPoint: null
            })
            setMaterialId(null)
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
        setMaterialId(null)
    }


    const isiMaterial = {
        title: material.title,
        content: material.description,
        videoUrl: material.linkVideo ,
        fileUrl: material.linkPowerPoint
    }
    

    return (
        <>
            <div>
                <PopUp
                    styling={"w-[500px] max-h-min"}
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

                {
                    openChangeClass ?
                        <ChangeClassTeacher
                            openChangeClass={openChangeClass}
                            setOpenChangeClass={() => setOpenChangeClass(false)}
                        /> : false
                }

                <div className='mb-[1rem]'>
                    <div className='flex justify-between'>
                        <h2>Title Post</h2>
                        <span className='cursor-pointer' onClick={() => setOpenChangeClass(true)}>
                            <img className="w-[32px] " src={Repeat} alt="repeat" />
                        </span>
                    </div>
                    <input
                        placeholder='Write your title here'
                        className='w-[100%] p-[1rem] border border-solid mt-8'
                        value={material.title}
                        onChange={(e) => setMaterial(prev => ({ ...prev, title: e.target.value }))}
                        required
                    />
                    <ReactQuill
                        theme='snow'
                        placeholder='Write your announcement here'
                        preserveWhitespace
                        value={material.description}
                        className='mt-6'
                        onChange={(value) => setMaterial(prev => ({ ...prev, description: value }))}
                    />
                    <div className='flex mt-[2rem] justify-between'>
                        <div className='w-[50%] flex'>
                            <Button
                                text={"Upload PPT"}
                                styling={"rounded-[7px] py-3 px-5 mr-[1rem]"}
                                handleClick={setPowerPoint}
                            />
                            <Button
                                text={"Upload Video"}
                                styling={"rounded-[7px] py-3 px-5"}
                                handleClick={setVideoLink}
                            />
                        </div>
                        <div className='w-[50%] flex justify-end'>
                            <Button
                                styling={"rounded-[10px] py-3 px-5 text-black bg-[#F5F5F5]"}
                                text={"Cancel"}
                                handleClick={handleCancel}
                            />
                            {
                                updateMode ?
                                    <Button
                                        styling={"rounded-[10px] py-3 px-5 ml-[1rem]"}
                                        text={loadingUpdate ? <Spinner/> : "Update"}
                                        handleClick={handleUpdate}
                                    />
                                    :
                                    <Button
                                        styling={"rounded-[10px] py-3 px-5 ml-[1rem]"}
                                        text={loadingAdd ? <Spinner/> : "posting"}
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