import { useSelector } from "react-redux";
import { Loading } from "../../components";
import useGetClass from "../../graphql/GetClass";
import ChangeClass from "../../components/Popup/ChangeClass";
import Modal from "../Modal";

const ChangeClassTeacher = ({ openChangeClass, setOpenChangeClass }) => {
  const { dataLogin } = useSelector((state) => state.login);
  const { data, loading, error } = useGetClass();
  if (loading) return <Loading size="100" />;
  if (error) return "Data Error...";

  const dataEmail = dataLogin?.email;

  const teacher = data.user.findByClassByUserId.filter(
    (e) => dataEmail === e.createdBy
  );

  return (
    <>
      <Modal open={[openChangeClass]}>
        <div>
          <div className="p-6">
            <h2 className="flex justify-end">
              <button onClick={() => setOpenChangeClass(false)}>x</button>
            </h2>
            <h3>Choose Class</h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr className="text-center">
                    <th scope="col" className="px-6 py-3">
                      Picture Class
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name Class
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Room
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {teacher.map((data) => (
                    <ChangeClass
                      key={data.name}
                      title={data.name}
                      code={data.code}
                      thumbnail="https://i.ibb.co/k6wjmXK/thumbnail-class.png"
                      url={`/dashboard/class/t/${data.id}`}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChangeClassTeacher;
