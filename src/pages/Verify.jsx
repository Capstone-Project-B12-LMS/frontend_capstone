import { useNavigate } from "react-router-dom"
import { PopUp, Button } from "../components" 
import CompleteIcon from '../assets/icons/complete-icon.svg'


const Verify = () => {

    const navigate = useNavigate()

    return (
            <PopUp
                show={true}
                styling='w-[800px] min-h-[300px] max-h-min px-[100px] py-[80px]'
            >
                <img src={CompleteIcon} alt="complete-icon" className=" max-w-[110px] w-[110px] h-[110px]" />
                <h1 className="text-black text-center leading-10 text-[32px] font-bold mt-14">Verify Complete</h1>
                <p className="text-center text-black leading-10 text-2xl mt-6">You can start login using your account</p>
                <Button
                    text="LOGIN"
                    styling="py-4 mt-14 text-xl font-medium w-[400px] rounded-[15px] flex justify-center"
                    handleClick={()=> navigate('/login', {replace:true})}
                />
            </PopUp>
    )
}

export default Verify