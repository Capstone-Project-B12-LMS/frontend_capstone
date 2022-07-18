import { useQuery } from '@apollo/client';


import Illustration from '../../assets/img/no-feedback.png';
import { EmptyContent, Loading } from "../../components";
import { GET_FEEDBACK } from '../../graphql/ClassQuery';



const Feedback = ({ id_class }) => {

    const { data: dataFeedback, loading: loadFeedback } = useQuery(GET_FEEDBACK, {
        variables : { class_id : id_class }
    });

    if (loadFeedback) return <Loading size="100" />

    return (
        <div className='px-8'>
            {
                !dataFeedback.feedback.findByClassId.length ?

                <div className="bg-white border border-solid rounded-[20px] px-10 py-12">
                    <EmptyContent
                        img={Illustration}
                        title="Teacher's feedback"
                        description="All feedback from your students will be displayed here"
                    />
                </div>

                :

                <div className="bg-white border border-solid rounded-[20px] px-10 py-12">
                    <h1 className='text-3xl text-black font-bold'>Feedback</h1>
                    <div className='mt-8 min-h-[180px] max-h-[58vh] overflow-y-auto'>
                    {
                        dataFeedback.feedback.findByClassId.map(feedback => (
                        <div className="bg-white w-full mt-2 py-6 flex border border-x-0 border-t-0 border-b-slate-300" key={feedback.id}>
                            <div className="w-[50px] min-w-[50px] h-[50px] rounded-full mr-6 overflow-hidden">
                            <img src={`https://i.pravatar.cc/150?u=${feedback.user.id}`}
                                alt="student-avatar"
                                className="w-full h-full object-cover object-center"
                                draggable="false"
                            />
                            </div>
                            <div className="flex flex-col">
                            <h3 className="text-xl text-bold font-bold capitalize">{feedback.user.fullName}</h3>
                            <span className="text-base text-[#A8A8A8] font-normal mt-2">{feedback.content}</span>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
            }
        </div>
    )
}


export default Feedback