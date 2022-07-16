import { NavLink } from "react-router-dom";
import { Loading } from "../../components";
import useGetClass from "../../graphql/GetClass";
import Illustration from "../../assets/img/illustration_1.png";

const HeaderClass = () => {
  const { data, loading, } = useGetClass();
  if (loading) return <Loading size="100" />;

  const cekData = data.user.findByClassByUserId;

  return (
    <>
      {cekData.length === 0 ? (
        <div className="flex flex-col items-center my-18 mx-auto">
          <img
            src={Illustration}
            alt="illustartion"
            className="w-[400px] h-[400px]"
          />
          <p className="text-black text-center font-normal text-2xl leading-10">
           Sorry you don't have a class to display <br/> Please create or join a class
          </p>
        </div>
      ) : (
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/dashboard/my-class"
            end
            className={({ isActive }) =>
              isActive
                ? "rounded-full text-center w-40 bg-transparent text-[#415A80] border-solid border-2 border-[#415A80]"
                : ""
            }
          >
            All
          </NavLink>
          <NavLink
            to="/dashboard/my-class/student"
            className={({ isActive }) =>
              isActive
                ? "rounded-full text-center w-40  bg-transparent text-[#415A80] border-solid border-2 border-[#415A80]"
                : ""
            }
          >
            Class Student
          </NavLink>
          <NavLink
            to="/dashboard/my-class/teacher"
            className={({ isActive }) =>
              isActive
                ? "rounded-full text-center w-40  bg-transparent text-[#415A80] border-solid border-2 border-[#415A80]"
                : ""
            }
          >
            Class Teacher
          </NavLink>
        </div>
      )}
    </>
  );
};

export default HeaderClass;
