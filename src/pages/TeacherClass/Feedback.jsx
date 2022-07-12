import { useQuery } from '@apollo/client';


import Illustration from '../../assets/img/no-feedback.png';
import { EmptyContent } from "../../components";
import { GET_FEEDBACK } from '../../graphql/ClassQuery';



const Feedback = ({ id_class }) => {

    const { data: dataFeedback, loading: loadFeedback, refetch } = useQuery(GET_FEEDBACK, {
        variables: id_class,
        notifyOnNetworkStatusChange: true
    });


    // console.log(loadFeedback);
    console.log(dataFeedback);


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