import { Button } from '../../components'

import StudentIcon from '../../assets/icons/people-icon-vector.svg'
import BookIcon from '../../assets/icons/icons-book.svg'

const Settings = ({materialSize = 0 , studentTotal = 0 , leaveButtonClick}) => {
  return (
    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] px-10 py-12">
        <div className='mx-auto w-[640px]'>
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