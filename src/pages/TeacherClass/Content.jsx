import { memo, useState } from "react";

import { EmptyContent, List, Material } from "../../components";

// Assets
import Illustration from '../../assets/img/no-content.png';


const Content = ({ materials, }) => {

    const [indexMaterial, setIndexMaterial] = useState(0);
    const changeIndexMaterial = (idx) => {
        setIndexMaterial(idx)
    }

    return (
        <>
            <div className="bg-white px-8">
                {
                    !materials?.length || !materials ?

                        <div className="border border-solid rounded-[20px] p-8">
                            <EmptyContent
                                img={Illustration}
                                title="This is where you will see updates for this class"
                                description="The teacher has not provided materials or quiz in this class. Use the content page to view material updates or quiz"
                            />
                        </div>

                        :

                        <>
                            <div className="border border-solid rounded-[20px] p-8">
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
                                                </div>
                                            </List>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="p-8 mt-8 border border-solid rounded-[20px]">
                                <Material assets={materials[indexMaterial]} />
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default memo(Content)