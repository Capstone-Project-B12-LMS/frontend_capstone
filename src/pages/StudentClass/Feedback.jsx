import Illustration from '../../assets/img/no-feedback.png';
import { EmptyContent } from "../../components";


const Feedback = () => {
  return (
    <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] p-8">
        <EmptyContent
            img={Illustration}
            title="Be the first to give feedback to the teacher"
        />
    </div>
  )
}


export default Feedback