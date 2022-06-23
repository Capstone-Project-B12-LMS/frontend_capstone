import { memo } from 'react'
import { useQuery } from '@apollo/client';

import { UserList , EmptyContent , Material} from '../../components';
import { FIND_CLASS_MATERIAL } from '../../graphql/MaterialQuery';
import Illustration from '../../assets/img/no-description.png'





const Description = ({ participant , class_id })=>{

    const {data , loading } = useQuery(FIND_CLASS_MATERIAL , { variables : { class_id }})

    const membersTotal = [...participant.teacher , ...participant.student].length;

    console.log(data)

    return(
        <>
                {
                    loading ? <h2>Loading Dulu nih...</h2> : 

                    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-8">
                        {
                            !data.material.findAllByClassId.length ?

                            <EmptyContent
                                img={Illustration}
                                title="This is where you will see updates for this class"
                                description="Use the description page to connect with your class and check announcements"
                            />

                            :

                            <Material assets={data.material.findAllByClassId[0]}/>
                        }
                    </div>
                }

                {
                    membersTotal > 0 ?
                    
                    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-8 mt-6">
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
                                        <UserList 
                                            key={member.id}
                                            avatar="https://i.ibb.co/nwbqL4K/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg"
                                            name={member.fullName}
                                            role="Teacher"
                                        />
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
                                        <UserList 
                                            key={member.id}
                                            avatar={`https://i.pravatar.cc/150?u=${member.id}`}
                                            name={member.fullName}
                                            role="Student"
                                        />
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