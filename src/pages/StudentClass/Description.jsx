import { memo } from 'react'
import { useState , useEffect } from 'react'

// Component

import { UserList } from '../../components'

// Assets

import Illustration from '../../assets/img/no-description.png'




const Description = ({ participant })=>{

    const membersTotal = [...participant.teacher , ...participant.student].length;

    return(
        <>
                <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6 flex items-center">
                    <div className="w-[237px] h-[196px] overflow-hidden flex">
                        <img src={Illustration} alt="illustration" className='w-full h-full object-cover'/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-[32px] text-black font-medium'>This is where you will see updates for this class</h3>
                        <p className='text-xl text-black mt-4'>Use the description page to connect with your class and check announcements</p>
                    </div>
                </div>

                {
                    membersTotal > 0 ?
                    
                    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] py-6 mt-6">
                        <div className="flex justify-between px-6">
                            <h1 className="text-2xl font-bold text-black">Class Members</h1>
                            <span className="text-black font-normal text-xl">
                                { membersTotal  === 1 ? 
                                    `${membersTotal} Member` : membersTotal > 20 ? 
                                    `${membersTotal}+ Members` : `${membersTotal} Members`
                                }
                            </span>
                        </div>

                        
                        <div className='mt-10 px-6'>
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


                        <div className='mt-10 px-6'>
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