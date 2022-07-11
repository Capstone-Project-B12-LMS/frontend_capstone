import { useState } from 'react'
import { Button } from '../../components'

import StudentIcon from '../../assets/icons/people-icon-vector.svg'
import BookIcon from '../../assets/icons/icons-book.svg'
import Duplicate from '../../assets/icons/dupliacte.svg'
import Checked from '../../assets/icons/check-mark.svg'



const Settings = ({materialSize = 0 , studentTotal = 0 , reportUrl ,  leaveButtonClick}) => {

  const [copied , setCopied] = useState(false)

  const copyReportLink = () =>{
    navigator.clipboard.writeText(reportUrl)
    .then(()=> {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500);
    })
  }

  return (
    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] px-10 py-12">
        <div className='mx-auto w-[640px]'>

          {/* Student & Material Info  */}

          <div className='flex justify-between'>
            <div className='w-[300px] max-h-[150px] p-6 border border-solid border-[#A8A8A8] rounded-[20px] flex items-center justify-between'>
              <div className='max-w-[70%]'>
                <h1 className='text-5xl font-bold text-black'>{ studentTotal }</h1>
                <p className='text-xl mt-5 overflow-hidden whitespace-nowrap text-ellipsis'>Total Students</p>
              </div>
              <div className='w-[64px] h-[44px] overflow-hidden'>
                <img src={StudentIcon} alt="student-icon" className="w-full h-full object-cover object-center"/>
              </div>
            </div>
            <div className='w-[300px] max-h-[150px] p-6 border border-solid border-[#A8A8A8] rounded-[20px] flex items-center justify-between'>
              <div className='max-w-[70%]'>
                <h1 className='text-5xl font-bold text-black'>{ materialSize }</h1>
                <p className='text-xl mt-5 overflow-hidden whitespace-nowrap text-ellipsis'>Total Materials</p>
              </div>
              <div className='w-[64px] h-[44px] overflow-hidden'>
                <img src={BookIcon} alt="student-icon" className="w-full h-full object-cover object-center"/>
              </div>
            </div>
          </div>

          {/* Data Report */}

          {
            reportUrl ?

            <>
            <h3 className='text-2xl font-normal mt-8'>Data Report</h3>
            <div className='border border-solid border-[#A8A8A8] rounded-[10px] py-4 pl-4 pr-16 mt-4 w-full relative'>
              <a 
                href='https://docs.google.com/spreadsheets/d/1IH0lJ412smzkLKKHeptTk5audrQ5sj5FEeFn6saMdRg/edit?usp=sharing' 
                className='block w-full text-xl overflow-hidden whitespace-nowrap text-ellipsis hover:underline'
              >
                https://docs.google.com/spreadsheets/d/1IH0lJ412smzkLKKHeptTk5audrQ5sj5FEeFn6saMdRg/edit?usp=sharing
              </a>
              <button 
                onClick={copyReportLink}
                className='bg-transparent absolute right-[20px] top-1/2 translate-y-[-50%] w-[35px] h-[35px] rounded-[5px] hover:bg-slate-100'
              >
                <img src={copied ? Checked : Duplicate} alt="icon" className='block mx-auto w-[20px] h-[20px]'/>
              </button>
            </div>
            </> : false
          }
          
          <Button
            text="Leave Class"
            styling="mt-10 py-4 w-full text-2xl font-bold rounded-[20px]"
            handleClick={leaveButtonClick}
          />
        </div>
    </div>
  )
}

export default Settings