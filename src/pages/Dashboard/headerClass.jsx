import { NavLink } from "react-router-dom";

const HeaderClass = () => {
  return (
      <div className="flex justify-center space-x-4">
        <NavLink
          to="/dashboard/my-class"
          end
          className={({isActive}) => `capitalize font-medium text-2xl py-2 px-6 mx-3 border-solid rounded-3xl ` + (isActive ? 'border border-[#415A80] text-[#415A80]' : 'border-trasparent text-black')}
        >
          All
        </NavLink>
        <NavLink
          to="/dashboard/my-class/student"
          className={({isActive}) => `capitalize font-medium text-2xl py-2 px-6 mx-3 border-solid rounded-3xl ` + (isActive ? 'border border-[#415A80] text-[#415A80]' : 'border-trasparent text-black')}
        >
          Class Student
        </NavLink>
        <NavLink
          to="/dashboard/my-class/teacher"
          className={({isActive}) => `capitalize font-medium text-2xl py-2 px-6 mx-3 border-solid rounded-3xl ` + (isActive ? 'border border-[#415A80] text-[#415A80]' : 'border-trasparent text-black')}
        >
          Class Teacher
        </NavLink>
      </div>
  );
};

export default HeaderClass;
