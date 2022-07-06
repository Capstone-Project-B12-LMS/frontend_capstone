import { useState , useEffect} from "react";
import { useSelector } from "react-redux";
import { Routes, Route , useParams, useLocation, useNavigate } from "react-router-dom"
import { useQuery, useMutation } from "@apollo/client";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


// GraphQL

import { GET_CLASS_BYID, REQUEST_COUNSELLING, LEAVE_CLASS } from "../../graphql/ClassQuery";
import { FIND_CLASS_MATERIAL } from '../../graphql/MaterialQuery';



// Component & Sub Pages

import Description from "./Description";
import Content from "./Content";
import Feedback from "./Feedback";
import Settings from "./Settings";
import { Tab, Button , PopUp , Loading, NoMatch, Spinner } from "../../components";



// Assets

import Banner_Illust from '../../assets/img/illustration-class.png'
import CompleteIcon from "../../assets/icons/complete-icon.svg"




const StudentClass = () => {

    // Hooks

    const [participants , setParticipants] = useState({
        teacher : [],
        student : [],
    });


    const [showCard , setShowCard] = useState(false);
    const [indexMaterial,setIndexMaterial] = useState(null);

    const param =  useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)


    const { dataLogin } = useSelector((state) => state.login);
    const { data: dataClass , loading: loadingDataClass , refetch } = useQuery(GET_CLASS_BYID , {variables : {id : param.id}});
    const { data: dataMaterial , loading: loadingMaterial } = useQuery(FIND_CLASS_MATERIAL , { variables : { class_id : param.id }})
    const [ doCounselling , {loading : loadingCouselling }] = useMutation(REQUEST_COUNSELLING);
    const [leavingClass] = useMutation(LEAVE_CLASS);


    const materialSize = !loadingMaterial && dataMaterial.material.findAllByClassId.length ? dataMaterial.material.findAllByClassId.length : false

    const Tabpath = [
        { text : "description" , path: `.`},
        { text : `content${materialSize ? `(${materialSize})` : ""}`, path: './content'},
        { text : "feedback", path: './feedback'},
        { text : "settings", path: './settings'}
    ]

    
    // Method list

    const getParticipant = ( ) => {
        const members = dataClass.class.findById.users
        const owner = dataClass.class.findById.createdBy

        const student = members.filter(member => member.email !== owner);
        const teacher = members.filter(member => member.email === owner);
        
        return { student , teacher }
    }

    const changeIndexMaterial = (index = 0) => setIndexMaterial(dataMaterial?.material?.findAllByClassId[index])

    const isUserAllowed = (id) => !id ? false : !!participants.student.find(student => student.id === dataLogin?.id)


    const requestCounselling = async ()=> {
        await doCounselling({ 
            variables: { guidance : { 
                userId:dataLogin?.id , 
                classId: dataClass.class.findById.id ,
                content: "Request Counselling"
            }}
        })
        return setShowCard(true)
    }


    const leaveClass = () =>{

        MySwal.fire({
            title: 'Leave Class',
            text: "Are you sure you want to leave this class?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#415A80',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave'
        })
        .then((result) => {
            if (result.isConfirmed) {

                MySwal.fire({
                    icon: 'success',
                    title: 'Please wait',
                    html: 'Redirecting you to dashboard home...',
                    allowOutsideClick:false,
                    showConfirmButton:false,
                    didOpen: async () => {
                        await leavingClass({variables : {
                            class_id: dataClass.class.findById.id,
                            user_id: dataLogin?.id
                        }})

                        MySwal.close()
                        return navigate('/dashboard' , {replace:true})
                    }
                })
            }
        })
    }


    useEffect(()=>{
        refetch()
        if(!loadingDataClass && !!dataClass?.class?.findById && !loadingMaterial && !!dataMaterial?.material?.findAllByClassId){
            setParticipants({...getParticipant()})
            changeIndexMaterial();
        }
    },[loadingDataClass , dataClass , loadingMaterial , dataMaterial])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[location.pathname])
    

    return (
        <>
            {
                loadingDataClass || loadingMaterial ? <Loading size="100"/> :

                    !isUserAllowed(dataLogin?.id) || !dataClass?.class?.findById ? 
                    
                    <NoMatch 
                        text="Class Not Found"
                        description="Make sure you are a student and visit the right class, please join the class first"
                    />

                    :

                    <>
                        <PopUp
                            show={showCard}
                            setShow={()=> setShowCard(!showCard)}
                            styling='w-[800px] min-h-[300px] max-h-min px-[100px] py-[100px]'
                        >
                            <img src={CompleteIcon} alt="complete-icon" className=" max-w-[110px] w-[110px] h-[110px]"/>
                            <h1 className="text-black text-center leading-10 text-[32px] font-bold mt-14">COUNSELING REQUEST COMPLETE!</h1>
                            <p className="text-center text-black leading-10 text-2xl mt-6">You’ll receive a confirmation when your request has been accepted or declined.</p>
                            <Button
                                text={"DONE"}
                                handleClick={()=> setShowCard(false)}
                                styling="w-full py-4 mt-10 rounded-[15px]"
                            />
                        </PopUp>
                        
                        <div className="mb-6 mx-auto w-full">

                            <Tab list={Tabpath}/>

                            <div className="flex justify-between w-full h-[320px] mt-6 px-10 bg-[#79C9DB] rounded-[20px]">
                                <p className="text-[40px] text-white font-bold mb-8 uppercase self-end max-w-[1000px]">{dataClass.class.findById.name}</p>
                                <img src={Banner_Illust} className="w-[445px] h-[307px] object-cover" alt="illustration"/>
                            </div>

                            <div className="grid grid-cols-[320px_minmax(500px,1fr)] auto-rows-fr gap-x-6 my-8">

                                <div>
                                    
                                    <div className="flex flex-col items-center bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6">
                                        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                                            <img 
                                                src={`https://i.pravatar.cc/150?u=${participants.teacher[0]?.id}`}
                                                alt="teacher-class" 
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="font-bold text-black text-center text-2xl">{ participants.teacher[0]?.fullName }</h4>
                                            <p className="text-base text-center text-[#A8A8A8] mt-1"> Owner at { dataClass.class.findById.name }</p>
                                        </div>
                                    </div>


                                    <div className="flex flex-col items-center bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-6 mt-6">
                                        <h1 className="text-bold text-black text-2xl">Any Questions ?</h1>
                                        <Button
                                            text='Request Counselling'
                                            styling='uppercase font-bold text-base py-3 px-6 rounded-[10px] mt-4 flex'
                                            handleClick={requestCounselling}
                                            icon={loadingCouselling ? <Spinner styling='ml-2' /> : false}
                                        />
                                    </div>

                                </div>

                                {/* Sub page */}

                                <div>
                                    <Routes>
                                        <Route index 
                                            element={
                                                <Description 
                                                    participant={participants} 
                                                    material={indexMaterial}
                                                />
                                            }
                                        />
                                        <Route path="content" 
                                            element={
                                                <Content 
                                                    materials={dataMaterial.material.findAllByClassId} 
                                                    handleSelectMaterial={changeIndexMaterial}
                                            />} 
                                        />
                                        <Route path="feedback" element={<Feedback user_id={dataLogin?.id} class_id={dataClass.class.findById.id}/>}/>
                                        <Route path="settings" element={
                                            <Settings 
                                                materialSize={dataMaterial.material.findAllByClassId.length}
                                                studentTotal={participants.student.length}
                                                leaveButtonClick={leaveClass}
                                            />
                                            
                                        }/>
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