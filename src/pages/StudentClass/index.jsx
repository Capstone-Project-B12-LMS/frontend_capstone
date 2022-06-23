import { useState , useEffect} from "react";
import { useSelector } from "react-redux";
import { Routes, Route , useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";

// GraphQL

import { GET_CLASS_BYID } from "../../graphql/ClassQuery";


// Component

import { Tab, Button } from "../../components";

// Assets

import Banner_Illust from '../../assets/img/illustration-class.png'
import Description from "./Description";



const StudentClass = () => {

    const [participants , setParticipants] = useState({
        teacher : [],
        student : [],
    })

    const param =  useParams();

    const { dataLogin } = useSelector((state) => state.login);
    const { data, loading } = useQuery(GET_CLASS_BYID , {variables : {id : param.id}});

    const Tabpath = [
        { text : "description" , path: `.`},
        { text : "content", path: './content'},
        { text : "feedback", path: './feedback'}
    ]

    const getParticipant = ( ) => {
        const members = data.class.findById.users
        const owner = data.class.findById.createdBy

        const student = members.filter(member => member.email !== owner);
        const teacher = members.filter(member => member.email === owner);
        
        return { student , teacher }
    }

    const isUserAllowed = (id) => !id ? false : 
        participants.student.find(student => student.id === dataLogin?.id)


    const doCounselling = ()=> alert('Counselling');


    useEffect(()=>{
        if(!loading && !!data?.class?.findById) {
            setParticipants({...getParticipant()});
        }
    },[loading , data])
   

    return (
        <>
            {
                loading ? <h2>Loading dulu ya guys...</h2> :

                    !data?.class?.findById && !isUserAllowed(dataLogin?.id) ? <h2>Class not found...</h2> :

                    <>
                        <div className="my-6 mx-auto w-full">

                        <Tab list={Tabpath}/>

                        <div className="flex justify-between w-full h-[320px] mt-6 px-10 bg-[#79C9DB] rounded-[20px]">
                            <p className="text-[40px] text-white font-bold mb-8 uppercase self-end max-w-[1000px]">{data.class.findById.name}</p>
                            <img src={Banner_Illust} className="w-[445px] h-[307px] object-cover" alt="illustration"/>
                        </div>

                        <div className="grid grid-cols-[320px_minmax(500px,1fr)] auto-rows-fr gap-x-6 my-8">

                            <div>
                                
                                <div className="flex flex-col items-center bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6">
                                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                                        <img 
                                            src="https://i.ibb.co/nwbqL4K/7ba8ec4a42b529dcbbc695ce0dd07a4a.jpg" 
                                            alt="teacher-class" 
                                            className="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-bold text-black text-center text-2xl">{ participants.teacher[0]?.fullName }</h4>
                                        <p className="text-base text-center text-[#A8A8A8] mt-1"> Teacher { data.class.findById.name }</p>
                                    </div>
                                </div>


                                <div className="flex flex-col items-center bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6 mt-6">
                                    <h1 className="text-bold text-black text-2xl">Any Questions ?</h1>
                                    <Button
                                        text='Request Counselling'
                                        styling='uppercase font-bold text-base py-2 px-6 rounded-[10px] mt-4'
                                        handleClick={doCounselling}
                                    />
                                </div>

                            </div>

                            <div>
                                <Routes>
                                    <Route index element={
                                        <Description participant={participants} class_id={param.id}/>
                                    }/>
                                    <Route path="content" element={<h1>Content</h1>}/>
                                </Routes>
                            </div>
                        </div>
                        </div>
                    </>
            }
        </> 
    );
};

export default StudentClass;