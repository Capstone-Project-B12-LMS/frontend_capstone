import { memo } from "react";

import { EmptyContent, List } from "../../components"
import Illustration from '../../assets/img/no-content.png';


const Content = ({ materials }) => {

    return (
        <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-8">
            {
                !materials?.length || !materials ?

                    <EmptyContent
                        img={Illustration}
                        title="This is where you will see updates for this class"
                        description="The teacher has not provided materials or quiz in this class. Use the content page to view material updates or quiz"
                    />

                    :

                    <>
                        <h1 className="text-2xl font-bold text-black">Materials</h1>

                        <div className='mt-6 min-h-[150px] max-h-fit overflow-y-auto'>
                            {
                                materials.map(material => (
                                    <List
                                        key={material.id}
                                        icon="https://i.ibb.co/hF89fyW/documents.png"
                                    >
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-xl text-bold font-bold capitalize">{material.title}</h3>
                                        </div>
                                    </List>
                                ))
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default memo(Content)