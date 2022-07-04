import Illustration from '../../assets/img/no-feedback.png';
import { EmptyContent } from "../../components";


const Feedback = () => {
    return (
        <div className="bg-white border border-solid border-[#A8A8A8] rounded-[20px] px-10 py-12">
            <EmptyContent
                img={Illustration}
                title="Teacher's feedback showing here"
            />
        </div>
    )
}


export default Feedback