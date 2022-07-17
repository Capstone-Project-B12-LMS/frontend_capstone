import { useSelector } from "react-redux";
import { Loading } from "../../components";
import HistoryTable from "../../components/Table/HistoryTable";
import useGetHistory from "../../graphql/GetHistory";


const History = () =>{
    const {dataLogin} = useSelector((state) => state.login);
    const {data, loading, error} = useGetHistory();
    if(loading) return <Loading size="100"/>;
    if(error) return "Data Error..";

    const dataHistory = data.activityHistory.findByUserId
    

    return(
        <>
        <div className="container mx-auto px-24 mt-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" colspan="3" className="px-6 py-3 text-xl">
                Today
              </th>  
            
            </tr>
          </thead>
          <tbody>
            {dataHistory.map((data)=> (
                <HistoryTable content={data.content} />
            
            ))}
            
          </tbody>
        </table>
      </div>
        </div>
        <div className="container mx-auto px-24 mt-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" colspan="3" className="px-6 py-3 text-xl">
                Yesterday
              </th>  
            
            </tr>
          </thead>
          <tbody>
          <HistoryTable />

          <HistoryTable />
          </tbody>
        </table>
      </div>
        </div>
      
        </>
        )
}

export default History;