import MemberComponent from "../../components/MemberComponent";
import { useSelector } from "react-redux";


const Member = ({ students, classId }) => {

  const { dataLogin } = useSelector((state) => state.login);
  const newStudents = students.filter((student) => student?.email !== dataLogin?.email);

  return (
    <div className="border border-solid rounded-[20px] px-12 py-10 rounded-[20px]">
      <h2 className='mt-5 mb-10'>Materials</h2>
      <p className="text-2xl text-[#415A80] mt-8 mb-6">Teacher</p>
      <div className="py-4 w-full border border-solid flex items-center">
        <img
          src={`https://i.pravatar.cc/100?u=${dataLogin?.id}`}
          alt=""
          className="rounded-full w-[60px] h-[60px] mx-4"
        />
        <h4 className="pl-4 text-xl">{dataLogin?.fullName}</h4>
      </div>
      {
        !!newStudents.length ? 

        <>
          <p className="text-2xl text-[#415A80] mt-8 mb-6">Students</p>
          {
            newStudents?.map(student => (
              <MemberComponent key={student?.id} student={ student } classId={ classId } />
            ))
          }
        </>
         
         : <p className="mt-10 text-center text-slate-400">No Student in your class</p>
      }
    </div>
  );

};

export default Member;
