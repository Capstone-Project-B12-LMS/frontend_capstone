import { Loading } from "../../components";
import HistoryTable from "../../components/Table/HistoryTable";
import useGetHistory from "../../graphql/GetHistory";
import Illustration from "../../assets/img/illustration_1.png";

const History = () => {
  const { data, loading, } = useGetHistory();
  if (loading) return <Loading size="100" />;

  const dataHistory = data.activityHistory.findByUserId;

  return (
    <>
      {dataHistory.length === 0 ? (
        <div className="flex flex-col items-center my-18 mx-auto">
          <img
            src={Illustration}
            alt="illustartion"
            className="w-[400px] h-[400px]"
          />
          <p className="text-black text-center font-normal text-2xl leading-10">
            Sorry you don't have any history to display
          </p>
        </div>
      ) : (
        <>
          <div className="container mx-auto px-24 my-6">
            <div className="relative overflow-x-auto shadow-md">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" colSpan="3" className="px-6 py-8 text-xl text-center">
                      History
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataHistory.map((data) => (
                    <HistoryTable content={data.content} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default History;
