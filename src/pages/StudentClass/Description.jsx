import { memo } from 'react'

import { List , EmptyContent , Material} from '../../components';
import Illustration from '../../assets/img/no-description.png'





const Description = ({ participant , material })=>{

    const membersTotal = [...participant.teacher , ...participant.student].length;

    return(
        <>
                    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] px-10 py-12">
                        {
                            !material ?

                            <EmptyContent
                                img={Illustration}
                                title="This is where you will see updates for this class"
                                description="Use the description page to connect with your class and check announcements"
                            />

                            :

                            <Material assets={material}/>
                        }
                    </div>

                {
                    membersTotal > 0 ?
                    
                    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] px-10 py-12 mt-6">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold text-black">Class Members</h1>
                            <span className="text-black font-normal text-xl">
                                { membersTotal  === 1 ? 
                                    `${membersTotal} Member` : membersTotal > 20 ? 
                                    `${membersTotal}+ Members` : `${membersTotal} Members`
                                }
                            </span>
                        </div>

                        
                        <div className='mt-10'>
                            <div className='pb-4 border border-solid border-x-transparent border-t-transparent border-b-[#415A80]'>
                                <h3 className='text-2xl text-[#415A80] font-light'>Teacher</h3>
                            </div>
                            <div className='mt-6 min-h-[150px] max-h-[250px] overflow-y-auto'>
                                {
                                    participant.teacher.map(member => (
                                        <List 
                                            key={member.id}
                                            icon={`https://i.pravatar.cc/150?u=${member.id}`}
                                        >
                                            <div className="flex flex-col justify-center">
                                                <h3 className="text-xl text-bold font-bold capitalize">{member.fullName}</h3>
                                                <span className="text-base text-[#A8A8A8] font-normal">Teacher</span>
                                            </div>
                                        </List>
                                    ))
                                }
                            </div>
                        </div>


                        <div className='mt-10'>
                            <div className='pb-4 border border-solid border-x-transparent border-t-transparent border-b-[#415A80]'>
                                <h3 className='text-2xl text-[#415A80] font-light'>Student</h3>
                            </div>
                            <div className='mt-6 min-h-[150px] max-h-[250px] overflow-y-auto'>
                                {
                                    !participant.student.length ? <p>No student in your class</p> :

                                    participant.student.map(member => (
                                        <List 
                                            key={member.id}
                                            icon={`https://i.pravatar.cc/150?u=${member.id}`}
                                            
                                        >
                                            <div className="flex flex-col justify-center">
                                                <h3 className="text-xl text-bold font-bold capitalize">{member.fullName}</h3>
                                                <span className="text-base text-[#A8A8A8] font-normal">Student</span>
                                            </div>
                                        </List>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    :
                     false
                }
        </>
    )
}

export default memo(Description)