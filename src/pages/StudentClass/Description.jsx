import { useQuery } from "@apollo/client";
import { useParams } from 'react-router';

// GraphQL

import { GET_CLASS_BYID } from '../../graphql/ClassQuery';

// Utils

import { splitMembers } from '../../utils/class';

// Component

import { UserList } from '../../components'

// Assets

import Illustration from '../../assets/img/no-description.png'




const Description = ({ participant })=>{

    const membersTotal = participant.teacher.concat(participant.student).length;

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

                <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] py-6 mt-6">
                    <div className="flex justify-between px-6">
                        <h1 className="text-2xl font-bold text-black">Class Members</h1>
                        <span className="text-black font-normal text-xl">
                            { membersTotal  > 1 ? 
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
                            <h3 className='text-2xl text-[#415A80] font-light'>Member</h3>
                        </div>
                        <div className='mt-6 min-h-[150px] max-h-[250px] overflow-y-auto'>
                            {
                                participant.users.map(member => (
                                    <UserList 
                                        key={member.id}
                                        avatar="https://i.ibb.co/nwbqL4K/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg"
                                        name={member.fullName}
                                        role="Student"
                                    />
                                ))
                            }
                        </div>
                    </div>

                </div>
        </>
    )
}

export default Description



/*

<div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6 flex items-center">
    <div className="w-[237px] h-[196px] overflow-hidden flex">
        <img src={Illustration} alt="illustration" className='w-full h-full object-cover'/>
    </div>
    <div className='ml-4'>
        <h3 className='text-[32px] text-black font-medium'>This is where you will see updates for this class</h3>
        <p className='text-xl text-black mt-4'>Use the description page to connect with your class and check announcements</p>
    </div>
</div>


<div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6 mt-6">
    <h1 className="text-2xl font-bold text-black">Introduction About This Class</h1>
    <div className="w-full h-[400px] rounded-[20px] mt-6 overflow-hidden">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/emSv9TTHZVY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p className="text-black text-xl font-normal mt-6">In this course, you will learn about the process of designing the appearance of an application starting from an introduction to design, how to design and execution in making designs. This course will also give you the opportunity to learn more about application and website design to improve your skills in making a design look more effective and efficient.</p>
</div>

*/