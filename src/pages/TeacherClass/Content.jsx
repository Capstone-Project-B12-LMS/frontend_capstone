import { memo, useState } from "react";

import { EmptyContent, List, Material } from "../../components";

// Assets
import iconDelete from '../../assets/icons/button-delete.svg';
import iconUpload from '../../assets/icons/button-update.svg';
import Illustration from '../../assets/img/no-content.png';


const Content = ({ materials, func }) => {

    const [indexMaterial, setIndexMaterial] = useState(0);
    const [materialUpdateId, setMaterialUpdateId] = useState(null)
    const changeIndexMaterial = (idx) => {
        setIndexMaterial(idx)
    }

    const handleButtonUpdate = (materiId) => {
        const materialId = materiId
        func(materialId)
    }




    // console.log();
    // console.log(materials[indexMaterial].id)

    return (
        <>
            <div className="bg-white px-4">
                {
                    !materials?.length || !materials ?

                        <EmptyContent
                            img={Illustration}
                            title="This is where you will see updates for this class"
                            description="The teacher has not provided materials or quiz in this class. Use the content page to view material updates or quiz"
                        />

                        :

                        <>
                            <div className="border border-solid border-[#A8A8A8] rounded-[20px] p-8">
                                <h1 className="text-2xl font-bold text-black">Materials</h1>
                                <div className='mt-6 min-h-[150px] max-h-fit overflow-y-auto'>
                                    {
                                        materials.map((material, materialIdx) => (
                                            <List
                                                key={material.id}
                                                icon="https://i.ibb.co/hF89fyW/documents.png"
                                            >
                                                <div className="flex items-center justify-between w-[100%]">
                                                    <button
                                                        className="bg-transparent text-black text-xl text-bold font-bold capitalize"
                                                        onClick={() => { changeIndexMaterial(materialIdx) }}
                                                    >{material.title}</button>
                                                    <div>
                                                        <button className="bg-white h-[2rem] w-[2rem] mr-[1.5rem]" >
                                                            <img src={iconDelete} alt="ini delete" />
                                                        </button>
                                                        <button className="bg-white h-[2rem] w-[2rem]" onClick={() => { handleButtonUpdate(material.id) }}>
                                                            <img src={iconUpload} alt="ini update" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </List>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="p-8 mt-8 border border-solid border-[#A8A8A8] rounded-[20px]">
                                <Material assets={materials[indexMaterial]} />
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default memo(Content)