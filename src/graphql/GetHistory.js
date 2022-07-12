import { gql, useQuery} from "@apollo/client";
import { useSelector } from "react-redux";

const getHistory = gql`
query History($id: String!) {
    activityHistory{
      findByUserId(userId:$id){
        id
        content
      }
    }
  } `

  const useGetHistory = () =>{
    const {dataLogin} = useSelector((state) => state.login);
    const {data, loading, error} = useQuery(getHistory,{
        variables:{ id: dataLogin?.id},
    })
    return{data, loading, error}
  }

  export default useGetHistory;