import { useState } from "react";

import { useQuery, useMutation } from "@apollo/client";
import { SAVE_FEEDBACK , GET_FEEDBACK } from "../../graphql/ClassQuery";

import { Button, Loading, Spinner } from "../../components";


const Feedback = ({class_id , user_id}) => {

  // Hooks 

  const [comment,setComment] = useState("")
  const {data: feedbackData, loading: loadFeedback , refetch} = useQuery(GET_FEEDBACK, {
    variables: { class_id },
    notifyOnNetworkStatusChange: true
  });
  const [addFeedback , {loading : loadSaveFeedback}] = useMutation(SAVE_FEEDBACK);


  // Method

  const alreadyGiveFeedback = ()=> feedbackData.feedback.findByClassId.find(feedback => feedback.user.id === user_id);

  const handleFormSubmit = async (e) =>{
    e.preventDefault();
    if(!comment.length) return false;
    await addFeedback({
      variables:{ 
        feedback:{ 
          userId: user_id , 
          classId: class_id,
          content: comment
        } 
      }
    })  
    setComment("")
    return refetch();
  }

  console.log(feedbackData)

  if(loadFeedback) return <Loading size="100"/>

  return (
    <>
        {
          !feedbackData.feedback.findByClassId.length || !alreadyGiveFeedback() ?

          <div className='px-8'>
            <h1 className='text-3xl text-black font-bold'>Feedback</h1>
            <p className="mt-3 text-xl text-slate-400">Give your feedback on your learning experience during this class</p>
            <form onSubmit={handleFormSubmit}>
              <textarea
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                className='w-full min-h-[180px] p-6 mt-8 resize-none text-xl leading-10 border border-solid border-[#A8A8A8] rounded-[15px]'
                placeholder='Enter your feedback here...'
                resize="true"
              >
              </textarea>
              <Button
                text="SUBMIT"
                formBtn={true}
                styling="mt-8 w-full py-5 rounded-[20px] font-bold text-xl flex justify-center"
                icon={loadSaveFeedback ? <Spinner styling='ml-2 inline-block m'/> : false }
              />
              </form>
          </div>

          :

          <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] px-10 py-12">
            <h1 className='text-3xl text-black font-bold'>Feedback</h1>
            <div className='mt-8 min-h-[180px] max-h-[58vh] overflow-y-auto'>
              {
                feedbackData.feedback.findByClassId.map(feedback => (
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
    </>
  )
}


export default Feedback