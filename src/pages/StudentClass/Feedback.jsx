import { useState } from "react";
import { Button } from "../../components";


const Feedback = () => {

  const [feedback,setFeedback] = useState("")
  const [feedbackList,setFeedbackList] = useState([
    {
      id:1,
      name:"Boby Santoso",
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      id:2,
      name:"Gracie Polin",
      text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
    },
    {
      id:3,
      name:"Anthony",
      text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    },
    {
      id:4,
      name:"Christine Bane",
      text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    }
  ])

  return (
    <>
        {
          !feedbackList.length ?

          <div className='px-8'>
            <h1 className='text-3xl text-black font-bold'>Feedback</h1>
            <p className="mt-3 text-xl text-slate-400">Give your feedback on your learning experience during this class</p>
            <textarea
              value={feedback}
              onChange={(e)=>setFeedback(e.target.value)}
              className='w-full min-h-[180px] p-6 mt-8 resize-none text-xl leading-10 border border-solid border-[#A8A8A8] rounded-[15px]'
              placeholder='Enter your feedback here...'
              resize
            >
            </textarea>
            <Button
              text="SUBMIT"
              styling="mt-8 w-full py-5 rounded-[20px] font-bold text-xl"
            />
          </div>

          :

          <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] px-10 py-12">
            <h1 className='text-3xl text-black font-bold'>Feedback</h1>
            <div className='mt-8 min-h-[320px] max-h-[58vh] overflow-y-auto'>
              {
                feedbackList.map(feedback => (
                  <div className="bg-white w-full mt-2 py-6 flex border border-x-0 border-t-0 border-b-slate-300" key={feedback.id}>
                      <div className="w-[50px] min-w-[50px] h-[50px] rounded-full mr-6 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${feedback.id}`} 
                              alt="student-avatar" 
                              className="w-full h-full object-cover object-center"
                              draggable="false"
                          />
                      </div>
                      <div className="flex flex-col">
                          <h3 className="text-xl text-bold font-bold capitalize">{feedback.name}</h3>
                          <span className="text-base text-[#A8A8A8] font-normal mt-2">{feedback.text}</span>
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