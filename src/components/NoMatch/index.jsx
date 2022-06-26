
import { Button } from '../index'
import { useNavigate } from 'react-router-dom'


const NoMatch = ({ text , description }) => {

    const navigate = useNavigate()

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-center'>{ text }</h1>
            <p className='text-slate-400 mx-auto mt-5 leading-7 text-center w-[400px]'>{ description }</p>
            <Button
                text="BACK TO HOME"
                styling="px-[40px] py-[15px] rounded-[30px] mt-10"
                handleClick={()=> navigate('/')}
            />
        </div>
    )
}


export default NoMatch